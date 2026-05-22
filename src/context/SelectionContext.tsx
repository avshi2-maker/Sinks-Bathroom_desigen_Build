"use client";

import { createContext, useContext, useState, useCallback, ReactNode } from "react";

export type SelectedItem = {
  id: string;
  name: string;
  thumbnailUrl: string;
  section: string;
};

type SelectionContextType = {
  items: SelectedItem[];
  toggle: (item: SelectedItem) => void;
  remove: (id: string) => void;
  clear: () => void;
  isSelected: (id: string) => boolean;
  count: number;
};

const SelectionContext = createContext<SelectionContextType | null>(null);

export function SelectionProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<SelectedItem[]>([]);

  const toggle = useCallback((item: SelectedItem) => {
    setItems((prev) => {
      const exists = prev.some((i) => i.id === item.id);
      if (exists) {
        return prev.filter((i) => i.id !== item.id);
      }
      return [...prev, item];
    });
  }, []);

  const remove = useCallback((id: string) => {
    setItems((prev) => prev.filter((i) => i.id !== id));
  }, []);

  const clear = useCallback(() => setItems([]), []);

  const isSelected = useCallback((id: string) => items.some((i) => i.id === id), [items]);

  return (
    <SelectionContext.Provider value={{ items, toggle, remove, clear, isSelected, count: items.length }}>
      {children}
    </SelectionContext.Provider>
  );
}

export function useSelection() {
  const ctx = useContext(SelectionContext);
  if (!ctx) {
    throw new Error("useSelection must be used within SelectionProvider");
  }
  return ctx;
}

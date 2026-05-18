"use server";

import { supabase } from "@/lib/supabase";

type LeadResult =
  | { success: true }
  | { success: false; error: string };

export async function submitLead(formData: FormData): Promise<LeadResult> {
  try {
    const full_name = (formData.get("full_name") as string)?.trim();
    const phone = (formData.get("phone") as string)?.trim();

    if (!full_name || !phone) {
      return { success: false, error: "אנא מלאו שם וטלפון." };
    }

    // Parse inspiration URLs from the JSON-stringified array
    let inspirationUrls: string[] = [];
    const inspirationJson = formData.get("inspiration_urls_json") as string;
    if (inspirationJson) {
      try {
        const parsed = JSON.parse(inspirationJson);
        if (Array.isArray(parsed)) {
          inspirationUrls = parsed.filter((u) => typeof u === "string");
        }
      } catch {
        // Silent — empty array is fine
      }
    }

    const data = {
      full_name,
      phone,
      city_he: ((formData.get("city_he") as string) || "").trim() || null,
      project_type: (formData.get("project_type") as string) || null,
      budget_tier: (formData.get("budget_tier") as string) || null,
      notes_he: ((formData.get("notes_he") as string) || "").trim() || null,
      inspiration_image_urls: inspirationUrls.length > 0 ? inspirationUrls : null,
      preferred_contact: "whatsapp",
      status: "new",
      utm_source: "direct",
      utm_medium: "landing_v1",
      landing_page: "/",
    };

    console.log("[submitLead] Attempting insert with:", JSON.stringify(data, null, 2));

    const { error } = await supabase.from("leads").insert(data);

    if (error) {
      console.error("[submitLead] Supabase error:", JSON.stringify(error, null, 2));
      const userMessage =
        error.code === "42501" || error.message?.includes("policy")
          ? "שגיאת הרשאות במסד הנתונים. אנא צרו קשר ישירות."
          : "שגיאה בשמירת הפרטים. אנא נסו שוב או צרו קשר ישירות.";
      return { success: false, error: userMessage };
    }

    console.log("[submitLead] Lead saved successfully");
    return { success: true };
  } catch (e) {
    console.error("[submitLead] Unexpected error:", e);
    return { success: false, error: "שגיאה לא צפויה. אנא נסו שוב." };
  }
}

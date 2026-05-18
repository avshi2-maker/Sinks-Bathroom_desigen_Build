import { supabase } from "@/lib/supabase";

// Server Component — fetches data at request time on the server.
// No "use client" needed for read-only proof-of-connection.

export default async function TestSupabasePage() {
  // Try to read from 3 tables we know exist in Sinks_ART:
  //   - marble_samples (yesterday's Phase 23 migration)
  //   - sink_media (today's Session 26 migration)
  //   - leads (today's Session 26 migration)

  const [marbleRes, mediaRes, leadsRes] = await Promise.all([
    supabase.from("marble_samples").select("id, name_he, color_family, availability_status").limit(5),
    supabase.from("sink_media").select("id, subject_type, marble_family, quality_tier").limit(5),
    supabase.from("leads").select("id, full_name, budget_tier, status").limit(5),
  ]);

  return (
    <main className="min-h-screen p-8 bg-white">
      <div className="max-w-4xl mx-auto space-y-8">
        <header>
          <h1 className="text-3xl font-bold mb-2">
            בדיקת חיבור Supabase
          </h1>
          <p className="text-gray-600">
            דף בדיקה זמני — מאמת שאתר הקמפיין יכול לקרוא מ-Sinks_ART Supabase.
          </p>
        </header>

        {/* marble_samples */}
        <section className="border rounded-lg p-6 bg-gray-50">
          <h2 className="text-xl font-semibold mb-3">
            marble_samples ({marbleRes.data?.length ?? 0} שורות)
          </h2>
          {marbleRes.error ? (
            <pre className="text-red-600 text-sm overflow-auto">
              ERROR: {JSON.stringify(marbleRes.error, null, 2)}
            </pre>
          ) : marbleRes.data?.length === 0 ? (
            <p className="text-gray-500">
              ✓ חיבור עובד. הטבלה ריקה (Ales עוד לא שלח דוגמאות שיש).
            </p>
          ) : (
            <pre className="text-sm overflow-auto bg-white p-3 rounded">
              {JSON.stringify(marbleRes.data, null, 2)}
            </pre>
          )}
        </section>

        {/* sink_media */}
        <section className="border rounded-lg p-6 bg-gray-50">
          <h2 className="text-xl font-semibold mb-3">
            sink_media ({mediaRes.data?.length ?? 0} שורות)
          </h2>
          {mediaRes.error ? (
            <pre className="text-red-600 text-sm overflow-auto">
              ERROR: {JSON.stringify(mediaRes.error, null, 2)}
            </pre>
          ) : mediaRes.data?.length === 0 ? (
            <p className="text-gray-500">
              ✓ חיבור עובד. הטבלה ריקה (תייגנו עדיין 0 תמונות בייצור).
            </p>
          ) : (
            <pre className="text-sm overflow-auto bg-white p-3 rounded">
              {JSON.stringify(mediaRes.data, null, 2)}
            </pre>
          )}
        </section>

        {/* leads */}
        <section className="border rounded-lg p-6 bg-gray-50">
          <h2 className="text-xl font-semibold mb-3">
            leads ({leadsRes.data?.length ?? 0} שורות)
          </h2>
          {leadsRes.error ? (
            <pre className="text-red-600 text-sm overflow-auto">
              ERROR: {JSON.stringify(leadsRes.error, null, 2)}
            </pre>
          ) : leadsRes.data?.length === 0 ? (
            <p className="text-gray-500">
              ✓ חיבור עובד. הטבלה ריקה (אין לידים עדיין — הקמפיין לא פעיל).
            </p>
          ) : (
            <pre className="text-sm overflow-auto bg-white p-3 rounded">
              {JSON.stringify(leadsRes.data, null, 2)}
            </pre>
          )}
        </section>

        <footer className="pt-8 border-t text-sm text-gray-500">
          <p>
            אם שלוש הטבלאות חוזרות בלי שגיאה (גם אם ריקות) — החיבור מאומת ואפשר להמשיך לבנות את דף הנחיתה.
          </p>
        </footer>
      </div>
    </main>
  );
}

import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY;

export const getWellnessAdvice = async (userFeeling: string): Promise<string> => {
  if (!apiKey) {
    throw new Error("API Key not found");
  }

  const ai = new GoogleGenAI({ apiKey });

  const prompt = `
    Kamu adalah teman kesehatan mental yang bijak dan suportif (Wellness Buddy).
    
    Konteks Poster "Mental Health Do & Don't":
    - Jangan: Memendam perasaan, Terlalu keras pada diri, Membandingkan diri, Menumpuk tugas.
    - Lakukan: Ceritakan perasaanmu, Jaga pola tidur, Lakukan hobi, Makan teratur/hidrasi.
    
    Pengguna sedang merasa: "${userFeeling}".
    
    Tugasmu:
    1. Validasi perasaan mereka dengan empati singkat.
    2. Berikan 1 saran spesifik yang dapat ditindaklanjuti berdasarkan poin "Lakukan" (Do) di atas yang paling relevan dengan situasi mereka.
    3. Gunakan bahasa Indonesia yang hangat, santai, namun sopan. Maksimal 3 kalimat.
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });
    
    return response.text || "Maaf, saya sedang istirahat sejenak. Coba tarik napas dalam-dalam ya.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Sepertinya koneksi kita terputus. Tapi ingat, kamu tidak sendirian.";
  }
};
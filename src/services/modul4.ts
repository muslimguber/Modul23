export const modul4Service = {
  getIntroduction: () => ({
    title: "Modul 4: Menanam di Lahan Sempit",
    pages: [
      {
        id: 0,
        title: "Pemanfaatan Pot & Polibag",
        content: "Lahan sempit bukan halangan untuk berkebun. Kamu bisa menggunakan pot, polibag, atau wadah bekas lainnya.",
        quiz: {
          question: "Wadah apa yang bisa digunakan untuk lahan sempit?",
          options: [
            { id: 'A', text: "Pot atau polibag", isCorrect: true },
            { id: 'B', text: "Harus lahan sawah luas", isCorrect: false }
          ]
        }
      },
      {
        id: 1,
        title: "Kuis Akhir Modul 4",
        isFinalQuiz: true,
        content: "Mari uji pemahamanmu tentang wadah tanam!"
      }
    ]
  })
};

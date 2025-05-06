{
   interface Developer<T, X= null> {
      name: string;
      computer: {
         brand: string;
         model: string;
         releaseYear: number;
      };
      smartWatch: T;
      bike?: X;
   }

   type poorWatch = {
      brend: string;
      display: string;
      model: string;
   };

   const poorDeveloper: Developer<poorWatch> = {
      name: "asru",
      computer: {
         brand: "asus",
         model: "0ss-d",
         releaseYear: 2000,
      },
      smartWatch: {
         brend: "emilab",
         model: "rewr",
         display: "oled",
      },
   };

   interface richWatch {
      brend: string;
      display: string;
      model: string;
      heartTrack: boolean;
      sleepTract: boolean;
   }
   interface bikeInfo {
      brend: string,
      engine: string
   }
   const richDeveloper: Developer<richWatch, bikeInfo> = {
      name: "asru",
      computer: {
         brand: "asus",
         model: "0ss-d",
         releaseYear: 2000,
      },
      smartWatch: {
         brend: "emilab",
         model: "rewr",
         display: "oled",
         heartTrack: true,
         sleepTract: true,
      },
      bike: {
         brend: "Yamaha",
         engine: "ddjl",
      },
   };
}

// tailwind.config.js
const {
  purple,
  purpleA,
  purpleDark,
  purpleDarkA,
  mauve,
  mauveDark,
  mauveA,
  mauveDarkA,
} = require("@radix-ui/colors");

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "purple-1": purple.purple1, // #FEFCFE
        "purple-2": purple.purple2, // #FBF7FE
        "purple-3": purple.purple3, // #F7EDFE
        "purple-4": purple.purple4, // #F2E2FC
        "purple-5": purple.purple5, // #EAD5F9
        "purple-6": purple.purple6, // #E0C4F4
        "purple-7": purple.purple7, // #D1AFEC
        "purple-8": purple.purple8, // #BE93E4
        "purple-9": purple.purple9, // #8E4EC6
        "purple-10": purple.purple10, // #8347B9
        "purple-11": purple.purple11, // #8145B5
        "purple-12": purple.purple12, // #402060

        "purple-alpha-1": purpleA.purpleA1, // #AA00AA03
        "purple-alpha-2": purpleA.purpleA2, // #8000E008
        "purple-alpha-3": purpleA.purpleA3, // #8E00F112
        "purple-alpha-4": purpleA.purpleA4, // #8D00E51D
        "purple-alpha-5": purpleA.purpleA5, // #8000DB2A
        "purple-alpha-6": purpleA.purpleA6, // #7A01D03B
        "purple-alpha-7": purpleA.purpleA7, // #6D00C350
        "purple-alpha-8": purpleA.purpleA8, // #6600C06C
        "purple-alpha-9": purpleA.purpleA9, // #5C00ADB1
        "purple-alpha-10": purpleA.purpleA10, // #53009EB8
        "purple-alpha-11": purpleA.purpleA11, // #52009ABA
        "purple-alpha-12": purpleA.purpleA12, // #250049DF

        "purple-dark-1": purpleDark.purple1, // #18111B
        "purple-dark-2": purpleDark.purple2, // #1E1523
        "purple-dark-3": purpleDark.purple3, // #3D224E
        "purple-dark-4": purpleDark.purple4, // #3D224E
        "purple-dark-5": purpleDark.purple5, // #48295C
        "purple-dark-6": purpleDark.purple6, // #54346B
        "purple-dark-7": purpleDark.purple7, // #664282
        "purple-dark-8": purpleDark.purple8, // #8457AA
        "purple-dark-9": purpleDark.purple9, // #8E4EC6
        "purple-dark-10": purpleDark.purple10, // #9A5CD0
        "purple-dark-11": purpleDark.purple11, // #D19DFF
        "purple-dark-12": purpleDark.purple12, // #ECD9FA

        "purple-dark-alpha-1": purpleDarkA.purpleA1, // #B412F90B
        "purple-dark-alpha-2": purpleDarkA.purpleA2, // #B744F714
        "purple-dark-alpha-3": purpleDarkA.purpleA3, // #C150FF2D
        "purple-dark-alpha-4": purpleDarkA.purpleA4, // #BB53FD42
        "purple-dark-alpha-5": purpleDarkA.purpleA5, // #BE5CFD51
        "purple-dark-alpha-6": purpleDarkA.purpleA6, // #C16DFD61
        "purple-dark-alpha-7": purpleDarkA.purpleA7, // #C378FD7A
        "purple-dark-alpha-8": purpleDarkA.purpleA8, // #C47EFFA4
        "purple-dark-alpha-9": purpleDarkA.purpleA9, // #B661FFC2
        "purple-dark-alpha-10": purpleDarkA.purpleA10, // #BC6FFFCD
        "purple-dark-alpha-11": purpleDarkA.purpleA11, // #D19DFF
        "purple-dark-alpha-12": purpleDarkA.purpleA12, // #F1DDFFFA

        "gray-1": mauve.mauve1, // #FDFCFD
        "gray-2": mauve.mauve2, // #FAF9FB
        "gray-3": mauve.mauve3, // #F2EFF3
        "gray-4": mauve.mauve4, // #EAE7EC
        "gray-5": mauve.mauve5, // #E3DFE6
        "gray-6": mauve.mauve6, // #DBD8E0
        "gray-7": mauve.mauve7, // #D0CDD7
        "gray-8": mauve.mauve8, // #BCBAC7
        "gray-9": mauve.mauve9, // #8E8C99
        "gray-10": mauve.mauve10, // #84828E
        "gray-11": mauve.mauve11, // #65636D
        "gray-12": mauve.mauve12, // #211F26

        "gray-alpha-1": mauveA.mauveA1, // #55005503
        "gray-alpha-2": mauveA.mauveA2, // #2B005506
        "gray-alpha-3": mauveA.mauveA3, // #30004010
        "gray-alpha-4": mauveA.mauveA4, // #20003618
        "gray-alpha-5": mauveA.mauveA5, // #20003820
        "gray-alpha-6": mauveA.mauveA6, // #14003527
        "gray-alpha-7": mauveA.mauveA7, // #10003332
        "gray-alpha-8": mauveA.mauveA8, // #08003145
        "gray-alpha-9": mauveA.mauveA9, // #05001D73
        "gray-alpha-10": mauveA.mauveA10, // #0500197D
        "gray-alpha-11": mauveA.mauveA11, // #0400119C
        "gray-alpha-12": mauveA.mauveA12, // #020008E0

        "gray-dark-1": mauveDark.mauve1, // #121113
        "gray-dark-2": mauveDark.mauve2, // #1A191B
        "gray-dark-3": mauveDark.mauve3, // #232225
        "gray-dark-4": mauveDark.mauve4, // #2B292D
        "gray-dark-5": mauveDark.mauve5, // #323035
        "gray-dark-6": mauveDark.mauve6, // #3C393F
        "gray-dark-7": mauveDark.mauve7, // #49474E
        "gray-dark-8": mauveDark.mauve8, // #625F69
        "gray-dark-9": mauveDark.mauve9, // #6F6D78
        "gray-dark-10": mauveDark.mauve10, // #7C7A85
        "gray-dark-11": mauveDark.mauve11, // #B5B2BC
        "gray-dark-12": mauveDark.mauve12, // #EEEEF0

        "gray-dark-alpha-1": mauveDarkA.mauveA1, // #00000000
        "gray-dark-alpha-2": mauveDarkA.mauveA2, // #F5F4F609
        "gray-dark-alpha-3": mauveDarkA.mauveA3, // #EBEAF814
        "gray-dark-alpha-4": mauveDarkA.mauveA4, // #EEE5F81D
        "gray-dark-alpha-5": mauveDarkA.mauveA5, // #EFE6FE25
        "gray-dark-alpha-6": mauveDarkA.mauveA6, // #F1E6FD30
        "gray-dark-alpha-7": mauveDarkA.mauveA7, // #EEE9FF40
        "gray-dark-alpha-8": mauveDarkA.mauveA8, // #EEE7FF5D
        "gray-dark-alpha-9": mauveDarkA.mauveA9, // #EAE6FD6E
        "gray-dark-alpha-10": mauveDarkA.mauveA10, // #ECE9FD7C
        "gray-dark-alpha-11": mauveDarkA.mauveA11, // #F5F1FFB7
        "gray-dark-alpha-12": mauveDarkA.mauveA12, // #FDFDFFEF
      },
    },
  },
  darkMode: "class",
  plugins: [],
};

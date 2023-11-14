// Initialization of astrology information
const astrology = {
  date: [
    '21 March - 20 April',
    '21 April - 21 May',
    '22 May - 21 June',
    '22 June - 23 July',
    '24 July - 23 August',
    '24 August - 23 September',
    '24 September - 23 October',
    '24 October - 22 November',
    '23 November - 21 December',
    '22 December - 20 January',
    '21 January - 19 February',
    '20 February - 20 March'
  ],
  sign: [
    'Aries ♈️',
    'Taurus ♉️',
    'Gemini ♊️',
    'Cancer ♋️',
    'Leo ♌️',
    'Virgo ♍️',
    'Libra ♎️',
    'Scorpio ♏️',
    'Sagittarius ♐️',
    'Capricorn ♑️',
    'Aquarius ♒️',
    'Pisces ♓️'
  ],
  gloss: [
    'The Ram',
    'The Bull',
    'The Twins',
    'The Crab	',
    'The Lion',
    'The Maiden',
    'The Scales',
    'The Scorpion',
    'The Archer (Centaur)',
    'The Goat',
    'The Water-bearer',
    'The Fish'
  ],
  horoscope: [
    {
      aries: 'Independent and strong-willed, you are a force to be reckoned with! You love nothing more than an exciting new goal to tackle, and you do your best work when you\'re flying solo. Your passion and energy keep the rest of us on our toes!'
    },
    {
      taurus: 'As a Taurus, you\'re a wonderful combination of laid-back and hard-working. You\'re honest and loyal, occasionally to a fault. Your determination and attention to detail will take you far in life.'
    },
    {
      gemini: 'Your ability to get along with a wide variety of people makes you a bit of a social butterfly, but you\'ll take advantage of some alone time when it comes your way. Curious and deeply emotional, you love ritual and celebration.'
    },
    {
      cancer: 'Your intuition is downright uncanny! You do your best socializing in small groups and prefer intimate relationships even if it means your social circle is on the smaller side. Your creative spirit will bring joy to all you meet.'
    },
    {
      leo: 'It\'s no wonder your symbol is a lion. Your personality and presence are impressive to all. This may intimidate some, but your inviting spirit will help you easily make friends. Your confidence will be an asset to you throughout your life.'
    },
    {
      virgo: 'You are the picture of poise and elegance. You love to stay organized and have a strong focus on keeping things aesthetic. But you\'re not just beauty. You\'ve got brains, too! You\'ll continue seeking knowledge and intellectual growth as you age.'
    },
    {
      libra: 'You have a large social circle, and your open-mindedness helps you get along with just about anyone. But don\'t get lost in the crowd! A focus on self-care and personal reflection will help you build your confidence over time.'
    },
    {
      scorpio: 'As a Scorpio, you can have a sharp edge, but this isn\'t always a negative quality. It gives you an appreciation for authenticity and a strong sense of independence. However, you\'re not always as tough as you appear. Once you let people into your life, you\'re a bit of a softy.'
    },
    {
      sagittarius: 'The road less traveled is your favorite place to be! Your bravery is admirable and will make you a good fit for leadership roles. You also have a bit of an itch in your shoes and will always be ready to take on a new adventure.'
    },
    {
      capricorn: 'Your perfectionism and high standards, though sometimes an obstacle, can be one of your superpowers when handled wisely. You have a strong sense of self, which enables you to make meaningful connections and lead the way.'
    },
    {
      aquarius: 'You may fall on the introvert side of the spectrum, but that doesn\'t mean you don\'t know how to have fun. You have an enviable combination of intelligence and intuition, and you are able to identify positive opportunities even in dark times.'
    },
    {
      pisces: 'You wouldn\'t hurt a fly! Empathy is your superpower, and you are an asset to any team you join or cause you support. Your gentleness is a virtue. However, be careful to not let your feelings get hurt too easily. Be sure to spend time building your self-confidence.'
    }
  ]
};
/*
  * Astrology Randomizer Function:
    This function will show you a random horoscope, based on the approximate date you may have been born.
*/
const randomizer = astrology => {
  const { date, sign, gloss, horoscope } = astrology;
  const randomNumber = Math.floor(Math.random() * 12);

  switch (randomNumber) {
    case 0:
      return `➣ Know your Horoscope:\n\n• If you're born between: [${date[0]}]\n• Your Sign is: [${sign[0]}]\n• Your Gloss is: [${gloss[0]}]\n\n➢ And this is your Destiny:\n\n❝${horoscope[0].aries}❞`;
      break;
    case 1:
      return `➣ Know your Horoscope:\n\n• If you're born between: [${date[1]}]\n• Your Sign is: [${sign[1]}]\n• Your Gloss is: [${gloss[1]}]\n\n➢ And this is your Destiny:\n\n❝${horoscope[1].taurus}❞`;
      break;
    case 2:
      return `➣ Know your Horoscope:\n\n• If you're born between: [${date[2]}]\n• Your Sign is: [${sign[2]}]\n• Your Gloss is: [${gloss[2]}]\n\n➢ And this is your Destiny:\n\n❝${horoscope[2].gemini}❞`;
      break;
    case 3:
      return `➣ Know your Horoscope:\n\n• If you're born between: [${date[3]}]\n• Your Sign is: [${sign[3]}]\n• Your Gloss is: [${gloss[3]}]\n\n➢ And this is your Destiny:\n\n❝${horoscope[3].cancer}❞`;
      break;
    case 4:
      return `➣ Know your Horoscope:\n\n• If you're born between: [${date[4]}]\n• Your Sign is: [${sign[4]}]\n• Your Gloss is: [${gloss[4]}]\n\n➢ And this is your Destiny:\n\n❝${horoscope[4].leo}❞`;
      break;
    case 5:
      return `➣ Know your Horoscope:\n\n• If you're born between: [${date[5]}]\n• Your Sign is: [${sign[5]}]\n• Your Gloss is: [${gloss[5]}]\n\n➢ And this is your Destiny:\n\n❝${horoscope[5].virgo}❞`;
      break;
    case 6:
      return `➣ Know your Horoscope:\n\n• If you're born between: [${date[6]}]\n• Your Sign is: [${sign[6]}]\n• Your Gloss is: [${gloss[6]}]\n\n➢ And this is your Destiny:\n\n❝${horoscope[6].libra}❞`;
      break;
    case 7:
      return `➣ Know your Horoscope:\n\n• If you're born between: [${date[7]}]\n• Your Sign is: [${sign[7]}]\n• Your Gloss is: [${gloss[7]}]\n\n➢ And this is your Destiny:\n\n❝${horoscope[7].scorpio}❞`;
      break;
    case 8:
      return `➣ Know your Horoscope:\n\n• If you're born between: [${date[8]}]\n• Your Sign is: [${sign[8]}]\n• Your Gloss is: [${gloss[8]}]\n\n➢ And this is your Destiny:\n\n❝${horoscope[8].sagittarius}❞`;
      break;
    case 9:
      return `➣ Know your Horoscope:\n\n• If you're born between: [${date[9]}]\n• Your Sign is: [${sign[9]}]\n• Your Gloss is: [${gloss[9]}]\n\n➢ And this is your Destiny:\n\n❝${horoscope[9].capricorn}❞`;
      break;
    case 10:
      return `➣ Know your Horoscope:\n\n• If you're born between: [${date[10]}]\n• Your Sign is: [${sign[10]}]\n• Your Gloss is: [${gloss[10]}]\n\n➢ And this is your Destiny:\n\n❝${horoscope[10].aquarius}❞`;
      break;
    case 11:
      return `➣ Know your Horoscope:\n\n• If you're born between: [${date[11]}]\n• Your Sign is: [${sign[11]}]\n• Your Gloss is: [${gloss[11]}]\n\n➢ And this is your Destiny:\n\n❝${horoscope[11].pisces}❞`;
      break;
  }
};
/*
  * Run the program in the node environment with the following command:
    "node file-name.js" -> node script.js
    If your first attempt doesn't go as you expected, run the script a few times to see your birth date.
*/
console.log(randomizer(astrology));
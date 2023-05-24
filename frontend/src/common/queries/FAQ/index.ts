import { IFaq } from 'src/common/types/FAQ';

export const getFrequentlyAskedQuestions: () => IFaq[] = () => {
  return [
    {
      context: 'generic',
      question: 'What services does your music studio offer?',
      answer:
        'Our music studio offers audio production, recording, mixing, mastering, video production, and event services such as live sound, lighting, and DJ services.',
    },
    {
      context: 'generic',
      question: 'Do you offer music lessons?',
      answer:
        'We do not offer music lessons at the current time. However, you can reach out to our team of producers and engineers if you are interested in lessons.',
    },
    {
      context: 'generic',
      question: 'What is your cancellation policy?',
      answer:
        'Our cancellation policy varies depending on the service, but generally, we require at least 24 hours notice for cancellations. For new clients, a booking deposit will be required and will only be refunded if the cancellation happens at least 48h prior to the session.',
    },
    {
      context: 'generic',
      question: 'Do you offer gift certificates?',
      answer: 'Yes, we offer gift certificates for all of our services.',
    },
    {
      context: 'generic',
      question: 'Can I tour your studio before booking a session?',
      answer:
        'Yes, you can schedule a tour of our studio before booking a session. Reach out to our team with prior notice to set up a visit or a call.',
    },
    {
      context: 'audio',
      question: 'How can I book a recording session at your studio?',
      answer:
        'You can book a recording session by contacting us through our website, email, or phone number.',
    },
    {
      context: 'audio',
      question: 'Can I bring my own engineer to the recording session?',
      answer:
        'Yes, you are welcome to bring your own engineer to the recording session.',
    },
    {
      context: 'audio',
      question: 'Can I bring my own engineer for mixing and mastering?',
      answer:
        'Yes, you are welcome to bring your own engineer for mixing and mastering.',
    },
    {
      context: 'audio',
      question: 'How do you ensure the quality of your recordings?',
      answer:
        'We use high-quality equipment and software in addition to the skill of our experienced engineers. Our team members will provide you a great service and a commitment to details to ensure the best possible records.',
    },
    {
      context: 'audio',
      question:
        'Do you provide instruments and equipment for the recording session?',
      answer:
        'Yes, we provide a variety of instruments and equipment including microphones, amps, guitars and a drum kit.',
    },
    {
      context: 'audio',
      question: 'What types of music can be recorded in your studio?',
      answer:
        'We welcome all genres of music, from classical RnB to rock, jazz to hip-hop, and everything in between.',
    },
    {
      context: 'audio',
      question: 'How much does it cost to record in your studio?',
      answer:
        'Our pricing varies depending on the specific services required. Please contact us for a personalized quote based on your needs.',
    },
    {
      context: 'audio',
      question:
        'What software and equipment do you use for recording and mixing?',
      answer:
        'We use a variety of software and equipment including Pro Tools, Logic Pro, and Ableton Live. We have a range of high-quality microphones, preamps, and outboard gear.',
    },
    {
      context: 'audio',
      question: 'Can I bring my own instruments to record?',
      answer:
        'Yes, you are welcome to bring your own instruments to record in our studio.',
    },
    {
      context: 'audio',
      question: 'Can I bring my own songs to record?',
      answer: 'Yes, you can bring your own songs to record at our studio.',
    },
    {
      context: 'audio',
      question: 'Can you produce music for me?',
      answer:
        'Yes, we offer music production services where we can help you create and produce original music.',
    },
    {
      context: 'audio',
      question: 'Do you offer remote recording services?',
      answer: 'We do not offer this service at the current moment.',
    },
    {
      context: 'audio',
      question:
        'How long does it typically take to record a song in your studio?',
      answer:
        'The amount of time it takes to record a song can vary greatly depending on the complexity of the vocals recording and the number of instruments involved. Generally speaking, we are able to finish a song in one or two sessions. Please contact us for a personalized estimate.',
    },
    {
      context: 'audio',
      question: 'Can you help with songwriting or arranging?',
      answer:
        "While we don't directly offer songwriting services, we can easily link you with a songwriter. In addition, our team of experienced engineers and producers can provide guidance and suggestions for improving your music.",
    },
    {
      context: 'audio',
      question: 'What file formats do you deliver the final recordings in?',
      answer: 'We deliver final recordings mainly in WAV and MP3 formats.',
    },
    {
      context: 'audio',
      question: 'Do you offer mixing and mastering services?',
      answer:
        'Yes, we offer both mixing and mastering services to help you achieve a professional, polished sound for your recordings.',
    },
    {
      context: 'audio',
      question: 'Can I attend the mixing and mastering sessions?',
      answer:
        'Yes, we welcome clients to attend the mixing and mastering sessions to provide input and feedback on the final product.',
    },
    {
      context: 'events',
      question:
        'What types of events can you provide audio and video services for?',
      answer:
        'We can provide audio and video services for a variety of events, including concerts, conferences, weddings, and corporate events.',
    },
    {
      context: 'events',
      question: 'How many people can your event space accommodate?',
      answer: 'Our event space can accommodate up to 50 people.',
    },
    {
      context: 'events',
      question: 'What equipment do you use for live events?',
      answer:
        'We use a range of professional audio and video equipment, including speakers, microphones, mixers, projectors, and screens.',
    },
    {
      context: 'events',
      question: 'Can you provide event planning and coordination services?',
      answer:
        'We do not provide event planning and coordination services. However, we offer audio visual services for private events to make sure you have all the equipment you need for each venue. We take care of the equipment setup as well.',
    },
    {
      context: 'events',
      question: 'What is your cancellation policy for event services?',
      answer:
        'Our cancellation policy varies depending on the specific services and event. Please contact us for more information.',
    },
    {
      context: 'events',
      question: 'Can I book your studio for a live event?',
      answer:
        'Yes, you can book our studio for a live event, and we provide live sound, lighting, and audio services.',
    },
    {
      context: 'events',
      question: 'How much does it cost to book your studio for an event?',
      answer:
        'The cost of booking our studio for an event can vary depending on the size and complexity of the event. Please contact us for a quote.',
    },
    {
      context: 'events',
      question: 'Do you provide DJ services for events?',
      answer:
        'Yes, we provide DJ services for events, and we have a wide selection of music genres to choose from.',
    },
    {
      context: 'video',
      question: 'Do you offer video editing services?',
      answer:
        'Yes, we offer video editing services to help you create a polished and professional final product.',
    },
    {
      context: 'video',
      question: 'What types of video projects can you work on?',
      answer:
        'We can work on a variety of video projects, including music videos, promotional videos, and corporate videos.',
    },
    {
      context: 'video',
      question: 'Can you provide motion graphics or animation services?',
      answer: 'We do not currently offer these services.',
    },
    {
      context: 'video',
      question: 'What is your turnaround time for video projects?',
      answer:
        'Our turnaround time for video projects can vary depending on the complexity of the project. Generally speaking, our turnaround time is two weeks. Please contact us for a personalized estimate.',
    },
    {
      context: 'video',
      question: 'Do you offer green screen or chroma key services?',
      answer: 'We do not currently offer these services.',
    },
    {
      context: 'video',
      question: 'Can you create a music video for my song?',
      answer:
        'Yes, we can create a music video for your song from concept, to filming to completion.',
    },
  ];
};

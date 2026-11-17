import { EventDetail, StoryMilestone, GalleryPhoto, BibleVerse, MinisterDetail } from '../types/wedding';

export const weddingConfig = {
  groomName: "VASU",
  brideName: "MERCY HAVILAH",
  groomDisplayName: "Vasu",
  brideDisplayName: "Mercy Havilah",
  groomFather: "N.JEPHANIAH",
  groomMother: "N.UMA DEVI",
  brideFather: "S.DEENA SHEKHAR",
  brideMother: "S.ESTHER",
  
  contactNumbers: [
    { label: "Ranjith", number: "+91 9963541004", tel: "+919963541004" },
    { label: "Prakash", number: "+91 7989107503", tel: "+917989107503" },
    { label: "Akhil", number: "+91 9059318618", tel: "+919059318618" }
  ],

  hostingUrl: "https://vasuwedshavilah.vercel.app/",

  developer: {
    name: "Vinay",
    phone: "9866450060",
    displayPhone: "+91 9866450060",
    whatsappUrl: "https://wa.me/919866450060?text=Hi%20Vinay%2C%20loved%20the%20wedding%20invitation%20website%20for%20Mercy%20Havilah%20%26%20Vasu!%20Would%20like%20to%20connect%20with%20you."
  },
  designerCredit: "Designed & Built by Vinay · +91 9866450060",
  
  coreVerse: {
    quote: "Therefore what God has joined together, let no one separate.",
    reference: "Mark 10:9"
  },
  markVerse: {
    quote: "Therefore what God has joined together, let no one separate.",
    reference: "Mark 10:9"
  },

  media: {
    hero: "./assets/images/hero.jpg",
    groom: "./assets/images/groom.jpg",
    bride: "./assets/images/bride.jpg",
    groomParents: "./assets/images/groom-parents.jpg",
    brideParents: "./assets/images/bride-parents.jpg",
    music: "./assets/music/wedding.mp3",
    video: "./assets/videos/wedding.mp4",
  },

  events: {
    ceremony: {
      id: "ceremony",
      title: "Wedding Ceremony",
      eyebrow: "A Sacred Beginning",
      date: "2027-02-03T09:00:00",
      displayDate: "Wednesday, 3 February 2027",
      displayTime: "9:00 AM",
      venue: "AB Function Hall (AC)",
      address: "Behind SSGS Degree College, SN Pet, Guntakal",
      mapsUrl: "https://maps.app.goo.gl/V26a9HupTv4vn8A28",
      calendarUrl: "https://calendar.google.com/calendar/render?action=TEMPLATE&text=Wedding+Celebration+of+MERCY+HAVILAH+%26+VASU&dates=20270203T033000Z/20270203T083000Z&details=Holy+Matrimony+of+Mercy+Havilah+and+Vasu.&location=AB+Function+Hall+(AC),+Behind+SSGS+Degree+College,+SN+Pet,+Guntakal",
      schedule: [
        { time: "08:30 AM", text: "Arrival of Guests & Prelude Worship Hymns" },
        { time: "09:00 AM", text: "Holy Matrimony Service & Scripture Readings" },
        { time: "10:00 AM", text: "Sacred Vows & Exchange of Rings" },
        { time: "10:30 AM", text: "Pastoral Blessing & Family Photographs" },
        { time: "11:30 AM", text: "Wedding Feast & Fellowship" }
      ]
    } as EventDetail,
    reception: {
      id: "reception",
      title: "Wedding Reception",
      eyebrow: "Celebration & Fellowship",
      date: "2027-02-09T18:30:00",
      displayDate: "Tuesday, 9 February 2027",
      displayTime: "6:30 PM Onwards",
      venue: "Friends Foundation",
      address: "Bacharam, Hyderabad",
      mapsUrl: "https://maps.app.goo.gl/ekiJgkWFCmETRwWg6",
      calendarUrl: "https://calendar.google.com/calendar/render?action=TEMPLATE&text=Wedding+Reception+of+MERCY+HAVILAH+%26+VASU&dates=20270209T130000Z/20270209T173000Z&details=Wedding+Reception+Celebration+of+Mercy+Havilah+and+Vasu.&location=Friends+Foundation,+Bacharam,+Hyderabad",
      schedule: [
        { time: "06:30 PM", text: "Welcome & Guest Arrival" },
        { time: "07:00 PM", text: "Celebration, Greetings & Fellowship" },
        { time: "08:00 PM", text: "Wedding Reception Feast & Dinner" }
      ],
      dignitaries: {
        officiant: {
          title: "MARRIAGE OFFICIANT",
          name: "U. Joshua Ranjit",
          organization: "Friends Foundation"
        },
        chiefGuest: {
          title: "CHIEF GUEST",
          name: "Pastor Chitti Babu",
          role: "Honored Chief Guest"
        }
      }
    } as EventDetail
  },

  minister: {
    heading: "The Minister of the Ceremony",
    sectionHeading: "Solemnization of Marriage",
    displaySectionHeading: "✝ SOLEMNIZATION OF MARRIAGE ✝",
    name: "Rev. A. P. Solomon Vijay Raj",
    title: "MARRIAGE OFFICIANT",
    church: "Agape A.G. Church, Guntakal",
    role: "Agape A.G. Church, Guntakal",
    officiantHeading: "The Minister of the Ceremony",
    officiantTitle: "MARRIAGE OFFICIANT",
    officiantName: "Pastor S. Gnana Jaya Prakash",
    officiantRole: "Marriage Officiant",
    officiantChurch: "Bethlehem Gospel Ministries"
  } as MinisterDetail,

  ministers: [
    {
      heading: "SOLEMNIZATION OF MARRIAGE",
      title: "MARRIAGE OFFICIANT",
      name: "Rev. A. P. Solomon Vijay Raj",
      church: "Agape A.G. Church, Guntakal",
      role: "Agape A.G. Church, Guntakal"
    },
    {
      heading: "SOLEMNIZATION OF MARRIAGE",
      title: "MARRIAGE OFFICIANT",
      name: "Pastor S. Gnana Jaya Prakash",
      church: "Bethlehem Gospel Ministries",
      role: "Bethlehem Gospel Ministries"
    }
  ] as MinisterDetail[],

  milestones: [
    {
      id: "providence",
      status: "completed",
      badge: "God's Providence",
      title: "Two Paths, One Purpose",
      scripture: "“We love because He first loved us.” — 1 John 4:19",
      description: "In God’s perfect timing and through the faithful prayers of our families, our paths crossed with peace, shared values, and mutual devotion to Christ."
    },
    {
      id: "engagement",
      status: "completed",
      badge: "Celebrated · 16 Feb 2026",
      title: "Our Engagement Ceremony",
      scripture: "“I have found the one whom my soul loves.” — Song of Solomon 3:4",
      description: "On 16 February 2026, surrounded by our loved ones and covered in prayer, our engagement was celebrated with joyful praise and devotion as we committed our lifelong journey into God's hands."
    },
    {
      id: "matrimony",
      status: "upcoming",
      badge: "Upcoming · 3 Feb 2027",
      title: "The Holy Matrimony",
      scripture: "“Therefore what God has joined together, let no one separate.” — Mark 10:9",
      description: "We will exchange our sacred wedding vows before God and family at AB Function Hall (AC), Behind SSGS Degree College, SN Pet, Guntakal at 9:00 AM."
    }
  ] as StoryMilestone[],

  gallery: [
    { src: "./assets/images/gallery-1.jpg", caption: "", alt: "Mercy Havilah and Vasu portrait 1" },
    { src: "./assets/images/gallery-2.jpg", caption: "", alt: "Mercy Havilah and Vasu portrait 2" },
    { src: "./assets/images/gallery-3.jpg", caption: "", alt: "Mercy Havilah and Vasu portrait 3" },
    { src: "./assets/images/gallery-4.jpg", caption: "", alt: "Mercy Havilah and Vasu portrait 4" },
    { src: "./assets/images/gallery-5.jpg", caption: "", alt: "Mercy Havilah and Vasu portrait 5" },
    { src: "./assets/images/gallery-6.jpg", caption: "", alt: "Mercy Havilah and Vasu portrait 6" },
  ] as GalleryPhoto[],

  scriptures: [
    {
      quote: "Therefore what God has joined together, let no one separate.",
      reference: "Mark 10:9"
    },
    {
      quote: "Love is patient, love is kind. It does not envy, it does not boast, it is not proud. It does not dishonor others, it is not self-seeking, it is not easily angered, it keeps no record of wrongs. Love never fails.",
      reference: "1 Corinthians 13:4–8"
    },
    {
      quote: "Two are better than one, because they have a good return for their labor: If either of them falls down, one can help the other up... A cord of three strands is not quickly broken.",
      reference: "Ecclesiastes 4:9–12"
    },
    {
      quote: "And over all these virtues put on love, which binds them all together in perfect unity.",
      reference: "Colossians 3:14"
    },
    {
      quote: "Unless the Lord builds the house, the builders labor in vain. Unless the Lord watches over the city, the guards stand watch in vain.",
      reference: "Psalm 127:1"
    },
    {
      quote: "There is no fear in love. But perfect love drives out fear... We love because He first loved us.",
      reference: "1 John 4:18–19"
    },
    {
      quote: "The Lord bless you and keep you; the Lord make His face shine on you and be gracious to you; the Lord turn His face toward you and give you peace.",
      reference: "Numbers 6:24–26"
    }
  ] as BibleVerse[]
};

export function getWeddingShareMessage(): string {
  return [
    `✝ WEDDING INVITATION ✝`,
    `MERCY HAVILAH & VASU`,
    ``,
    `🌐 Digital Invitation & Preview:`,
    weddingConfig.hostingUrl,
    ``,
    `"Therefore what God has joined together, let no one separate." — Mark 10:9`,
    ``,
    `With praise and gratitude to God, we joyfully invite you and your family to celebrate our Holy Matrimony:`,
    ``,
    `👰 Bride: ${weddingConfig.brideName}`,
    `Daughter of Mr. ${weddingConfig.brideFather} & Mrs. ${weddingConfig.brideMother}`,
    ``,
    `🤵 Groom: ${weddingConfig.groomName}`,
    `Son of Mr. ${weddingConfig.groomFather} & Mrs. ${weddingConfig.groomMother}`,
    ``,
    `━━━━━━━━━━━━━━━━━━━━`,
    `💍 HOLY MATRIMONY SERVICE:`,
    `📅 Wednesday, 3 February 2027 at 9:00 AM`,
    `📍 ${weddingConfig.events.ceremony.venue}, ${weddingConfig.events.ceremony.address}`,
    `🗺️ Google Maps: ${weddingConfig.events.ceremony.mapsUrl}`,
    `━━━━━━━━━━━━━━━━━━━━`,
    `🎉 WEDDING RECEPTION:`,
    `📅 Tuesday, 9 February 2027 · 6:30 PM Onwards`,
    `📍 ${weddingConfig.events.reception.venue}, ${weddingConfig.events.reception.address}`,
    `🗺️ Google Maps: ${weddingConfig.events.reception.mapsUrl}`,
    `✝ Officiant: U. Joshua Ranjit (Friends Foundation)`,
    `🌟 Chief Guest: Pastor Chitti Babu`,
    `━━━━━━━━━━━━━━━━━━━━`,
    ``,
    `📞 Contacts:`,
    `• Ranjith: +91 9963541004`,
    `• Prakash: +91 7989107503`,
    `• Akhil: +91 9059318618`,
    `━━━━━━━━━━━━━━━━━━━━`,
    ``,
    `🌐 Open digital invitation for photos, timings & Google Maps directions:`,
    weddingConfig.hostingUrl
  ].join('\n');
}


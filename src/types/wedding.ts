export interface ReceptionDignitaries {
  officiant: {
    title: string;
    name: string;
    organization: string;
  };
  chiefGuest: {
    title: string;
    name: string;
    role?: string;
  };
}

export interface EventDetail {
  id: string;
  title: string;
  eyebrow: string;
  date: string; // ISO string
  displayDate: string;
  displayTime: string;
  venue: string;
  address: string;
  mapsUrl: string;
  calendarUrl: string;
  schedule: Array<{
    time: string;
    text: string;
  }>;
  dignitaries?: ReceptionDignitaries;
}

export interface StoryMilestone {
  id: string;
  status: 'completed' | 'upcoming';
  badge: string;
  title: string;
  scripture: string;
  description: string;
}

export interface GalleryPhoto {
  src: string;
  caption: string;
  alt: string;
}

export interface BibleVerse {
  quote: string;
  reference: string;
  context?: string;
}

export interface MinisterDetail {
  heading: string;
  name: string;
  title?: string;
  role?: string;
  church?: string;
  sectionHeading?: string;
  displaySectionHeading?: string;
  sectionSubheading?: string;
  officiantHeading?: string;
  officiantTitle?: string;
  officiantName?: string;
  officiantRole?: string;
  officiantChurch?: string;
}


const header = {
  // all the properties are optional - can be left empty or deleted
  
  title: 'BK.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'BHAVAN KUMAR S',
  role: 'Front End Engineer',
  picture: 'bhavan.png',

  description:
    "Recent B.E. Computer Science graduate (2025) with a solid foundation in Java and web development (HTML, CSS, Javascript).Passionate about building meaningful applications and eager to apply problem-solving skills in real-worldsoftware projects. Seeking an entry-level role to contribute and grow in a dynamic, tech-driven environment.",
  resume: 'https://drive.google.com/file/d/1MKDhppQDALeWhP3WTOVphMp8chiZiK10/view?usp=drivesdk',
  social: {
    linkedin: 'https://www.linkedin.com/in/bhavan-kumar-s-98891b227',
    github: 'https://github.com/Bhavankumar583',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Train Booking Management',
    description:
      'I designed and developed a web-based application for booking and managing tickets. The system features a form-based interface that collects essential passenger details, including name, seat number, travel date, and journey route (from and to). Each booking automatically generates a unique Ticket ID, ensuring easy tracking and management. Additionally, a booking history module was implemented, allowing users to view and delete their past bookings for improved user control and transparency.',
    stack: ['HTML5', 'CSS3', 'JavaScript'],
    sourceCode: 'https://github.com/Bhavankumar583/Ticket-booking-Management-.git',
    livePreview: 'https://bhavankumar583.github.io/Ticket-booking-Management-/',
    image: 'Train booking system.png',
  },
  {
    name: 'YouTube Thumbnail Downloader',
    description:
      'I designed and developed a web-based application for booking and managing tickets. The system features a form-based interface that collects essential passenger details, including name, seat number, travel date, and journey route (from and to). Each booking automatically generates a unique Ticket ID, ensuring easy tracking and management. Additionally, a booking history module was implemented, allowing users to view and delete their past bookings for improved user control and transparency.',
    stack: ['HTML5', 'CSS3', 'JavaScript'],
    sourceCode: 'https://github.com/Bhavankumar583/You-Tube-Thumbnail-Downloader-.git',
    livePreview: 'https://bhavankumar583.github.io/You-Tube-Thumbnail-Downloader-/',
    image: 'youtube thmbnail downloader.png',
  },

]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML5',
  'CSS3',
  'JavaScript',
  'React.Js',
  'Java',
  'MySQL'
 
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'bhavankumar0301@gmail.com',
}

export { header, about, projects, skills, contact }

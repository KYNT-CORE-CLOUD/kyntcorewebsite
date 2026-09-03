import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  navigateTo(sectionId: string): void {
  this.menuOpen = false;

  setTimeout(() => {
    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
        
      });
    }
  }, 100);
}
  menuOpen = false;
  selectedYear = 2024;

  selectYear(year: number): void {
    this.selectedYear = year;
  }

  sendMessage(event: Event): void {
  event.preventDefault();

  const form = event.target as HTMLFormElement;

  const name = (form.elements.namedItem('name') as HTMLInputElement).value;
  const email = (form.elements.namedItem('email') as HTMLInputElement).value;
  const subject = (form.elements.namedItem('subject') as HTMLInputElement).value;
  const message = (form.elements.namedItem('message') as HTMLTextAreaElement).value;

  const emailSubject = subject || `Message from ${name}`;

  const emailBody = `
Name: ${name}
Email: ${email}

Message:
${message}
  `.trim();

  const gmailUrl =
    `https://mail.google.com/mail/?view=cm&fs=1` +
    `&to=kynt2026@gmail.com` +
    `&su=${encodeURIComponent(emailSubject)}` +
    `&body=${encodeURIComponent(emailBody)}`;

  window.open(gmailUrl, '_blank');
  }
}

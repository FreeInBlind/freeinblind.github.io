function downloadCV() {
    if (typeof jsPDF === 'undefined') {
        const script = document.createElement('script');
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js';
        script.onload = generatePDF;
        document.head.appendChild(script);
    } else {
        generatePDF();
    }
}

function generatePDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    
    doc.setProperties({
        title: 'Long Yuxuan - Professional CV',
        subject: 'Curriculum Vitae',
        author: 'Long Yuxuan',
        keywords: 'cv, resume, javascript, it',
    });
    
    doc.setFontSize(22);
    doc.setTextColor(0, 0, 0);
    doc.setFont(undefined, 'bold');
    doc.text('Long Yuxuan', 105, 20, { align: 'center' });
    
    doc.setFontSize(16);
    doc.setTextColor(0, 0, 0);
    doc.setFont(undefined, 'normal');
    doc.text('Bachelor of Information Technology', 105, 30, { align: 'center' });
    
    doc.setDrawColor(200, 200, 200);
    doc.line(20, 35, 190, 35);
    
    doc.setFontSize(16);
    doc.setTextColor(0, 0, 255);
    doc.setFont(undefined, 'bold');
    doc.text('About', 20, 45);
    
    doc.setFontSize(12);
    doc.setTextColor(0, 0, 0);
    doc.setFont(undefined, 'normal');
    
    const aboutText = [
        "Welcome to my professional CV website.",
        "I am a passionate Bachelor of IT with experience in JavaScript.",
        "This website showcases my education, skills, and professional journey."
    ];
    
    let yPosition = 55;
    aboutText.forEach(line => {
        doc.text(line, 20, yPosition);
        yPosition += 7;
    });
    
    doc.setFontSize(16);
    doc.setTextColor(0, 0, 255);
    doc.setFont(undefined, 'bold');
    doc.text('Education', 20, 80);
    
    doc.setFontSize(12);
    doc.setTextColor(0, 0, 0);
    
    doc.setFont(undefined, 'bold');
    doc.text('Universiti Teknologi PETRONAS', 20, 90);
    doc.setFont(undefined, 'normal');
    doc.text('• Bachelor of Information Technology', 25, 97);
    doc.text('• 2025 - Present', 25, 104);
    doc.text('• Current CGPA: X.XX', 25, 111);
    
    doc.setFont(undefined, 'bold');
    doc.text('Guangzhou Yucai High School', 20, 125);
    doc.setFont(undefined, 'normal');
    doc.text('• 2021 - 2024', 25, 132);
    
    doc.setFontSize(16);
    doc.setTextColor(0, 0, 255);
    doc.setFont(undefined, 'bold');
    doc.text('Skills', 20, 145);
    
    doc.setFontSize(12);
    doc.setTextColor(0, 0, 0);
    
    doc.setFont(undefined, 'bold');
    doc.text('Technical Skills:', 20, 155);
    doc.setFont(undefined, 'normal');
    doc.text('• HTML, CSS, JavaScript, Git', 25, 162);
    
    doc.setFont(undefined, 'bold');
    doc.text('Soft Skills:', 20, 172);
    doc.setFont(undefined, 'normal');
    doc.text('• Teamwork, Communication, Problem Solving, Time Management', 25, 179);
    
    doc.setFontSize(16);
    doc.setTextColor(0, 0, 255);
    doc.setFont(undefined, 'bold');
    doc.text('Work Experience & Projects', 20, 195);
    
    doc.setFontSize(12);
    doc.setTextColor(0, 0, 0);
    
    doc.setFont(undefined, 'bold');
    doc.text('Job/Project Title', 20, 205);
    doc.setFont(undefined, 'normal');
    doc.text('Company/Organization | Date', 25, 212);
    doc.text('• Description point 1', 30, 219);
    doc.text('• Description point 2', 30, 226);
    doc.text('• Description point 3', 30, 233);
    
    doc.setFontSize(16);
    doc.setTextColor(0, 0, 255);
    doc.setFont(undefined, 'bold');
    doc.text('Contact Information', 20, 250);
    
    doc.setFontSize(12);
    doc.setTextColor(0, 0, 0);
    doc.setFont(undefined, 'normal');
    
    doc.text('• Email: YUXUAN_24006431@utp.edu.my', 20, 260);
    doc.text('• Phone: +60 17-671 2411', 20, 267);
    doc.text('• GitHub: github.com/FreeInBlind', 20, 274);
    doc.text('• Bilibili: space.bilibili.com/400489511/upload/opus', 20, 281);
    
    doc.save('LongYuxuan_CV.pdf');
    
    alert('Your CV has been downloaded successfully!');
}
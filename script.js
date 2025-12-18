document.addEventListener('DOMContentLoaded', () => {

  const sendBtn = document.getElementById('send-btn');
  const userInput = document.getElementById('user-input');
  const chatBody = document.getElementById('chat-body');

  sendBtn.addEventListener('click', sendMessage);
  userInput.addEventListener('keydown', e => {
    if (e.key === 'Enter') sendMessage();
  });

  function sendMessage() {
    const msg = userInput.value.trim();
    if (!msg) return;

    addMessage(msg, 'user-msg');
    userInput.value = '';

    setTimeout(() => {
      addMessage(getBotResponse(msg), 'bot-msg');
    }, 300);
  }

  function addMessage(text, cls) {
    const div = document.createElement('div');
    div.className = `message ${cls}`;
    div.textContent = text;
    chatBody.appendChild(div);
    chatBody.scrollTop = chatBody.scrollHeight;
  }

  window.quickAsk = function(type) {
    let text = '';
    if (type === 'admission') text = 'How can I apply for admission?';
    if (type === 'courses') text = 'What courses are offered?';
    if (type === 'fees') text = 'Tell me about fees';
    if (type === 'events') text = 'What events are happening?';
    if (type === 'facilities') text = 'What facilities are available?';
    if (type === 'portal') text = 'How can I access my student portal?';

    userInput.value = text;
    sendMessage();
  };

  function getBotResponse(msg) {
    msg = msg.toLowerCase();

    if (msg.includes('apply'))
      return 'You can apply online via the HITS admissions portal. Fill the form, upload documents, and pay the fee.';

    if (msg.includes('eligibility'))
      return 'B.Tech: 10+2 with Science. M.Tech: B.Tech in relevant field. MBA: Graduation with minimum 50%.';

    if (msg.includes('process'))
      return 'Admission process includes registration, document submission, entrance exam, counseling, and fee payment.';

    if (msg.includes('entrance'))
      return 'Some programs require an entrance exam. Please check official notifications.';

    if (msg.includes('courses'))
      return 'HITS offers B.Tech, M.Tech, MBA, and diploma programs.';

    if (msg.includes('syllabus'))
      return 'Syllabus is available on the HITS website under Academics section.';

    if (msg.includes('duration'))
      return 'B.Tech – 4 years, M.Tech – 2 years, MBA – 2 years.';

    if (msg.includes('fees'))
      return 'Fees vary by program. Please check the Fees section on the official website.';

    if (msg.includes('online payment'))
      return 'Yes, you can pay fees online via the student portal.';

    if (msg.includes('scholarship'))
      return 'Scholarships are available based on merit and financial need.';

    if (msg.includes('events'))
      return 'Events and activities are announced on the HITS website and notice boards.';

    if (msg.includes('clubs'))
      return 'HITS has technical, cultural, and sports clubs for students.';

    if (msg.includes('facilities'))
      return 'HITS provides Library, Labs, Hostels, Sports, Cafeteria, and Wi-Fi.';

    if (msg.includes('hostel'))
      return 'Hostel rules and availability are listed on the HITS website.';

    if (msg.includes('transport'))
      return 'Yes, HITS provides bus facilities from nearby locations.';

    if (msg.includes('portal'))
      return 'Visit portal.hits.ac.in and log in using your credentials.';

    if (msg.includes('reset'))
      return 'Click “Forgot Password” on the portal login page to reset your password.';

    if (msg.includes('website'))
      return 'Official website: www.hits.ac.in';

    return 'Sorry, I couldn’t understand. Please ask another question.';
  }

});

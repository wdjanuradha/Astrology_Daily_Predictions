let language = 'en'; // Default language is English
const translations = {
    en: {
        title: 'Daily Astrology Predictions',
        selectLagnaLabel: 'Choose Your Lagna:',
        resultsTitle: "Today's Predictions",
        footerText: 'Astrology Web App © 2024'
    },
    si: {
        title: 'දිනපතා පලාපල',
        selectLagnaLabel: 'ඔබගේ ලග්නය තෝරන්න:',
        resultsTitle: 'අද දින ඔබගේ පලාපල',
        footerText: 'අදින පලාපල © 2024'
    }
};

// Function to switch language
function switchLanguage() {
    language = document.getElementById('languageSelector').value;

    document.getElementById('title').innerText = translations[language].title;
    document.getElementById('selectLagnaLabel').innerText = translations[language].selectLagnaLabel;
    document.getElementById('resultsTitle').innerText = translations[language].resultsTitle;
    document.getElementById('footerText').innerText = translations[language].footerText;
}

// Daily predictions data
const predictionsData = {
   aries: { 
       prediction: "Today is a great day to start new projects. You will find success in your endeavors.",
       advice:"Embrace new challenges and don't hesitate to take the lead.",
       loveLife:"A romantic opportunity may arise. Be open to connections.",
       career:"Your hard work will be recognized. Stay focused.",
       health:"Maintain a balanced diet to keep your energy levels high.",
       finances:"Consider saving for future investments.",
       luckyColor:"Red", 
       luckyTime:"2 PM - 4 PM", 
       luckyNumber:"5" 
   },
   taurus: { 
       prediction:"Focus on your relationships today. It's a good day for communication.",
       advice:"Reach out to an old friend or family member you haven't spoken to in a while.",
       loveLife:"Your partner may need extra support today. Be attentive.",
       career:"Collaborative efforts will yield positive outcomes.",
       health:"Incorporate some light exercise into your routine for better well-being.",
       finances:"Avoid impulsive purchases today.",
       luckyColor:"Green", 
       luckyTime:"1 PM - 3 PM", 
       luckyNumber:"3" 
   },
   gemini:{ 
       prediction:"Your creativity will shine today. Engage in artistic activities.",
       advice:"Try something new that sparks your interest.",
       loveLife:"A surprise encounter could lead to something special.",
       career:"Your innovative ideas may impress your colleagues.",
       health:"Stay hydrated and take breaks during work.",
       finances:"Be cautious with spending; save for future needs.",
       luckyColor:"Yellow", 
       luckyTime:"11 AM - 1 PM", 
       luckyNumber:"7" 
   },
   cancer:{ 
       prediction:"Today is a day for self-care. Take some time to relax and rejuvenate.",
       advice:"Spend time with loved ones to recharge your spirit.",
       loveLife:"A heartfelt conversation can strengthen your bond.",
       career:"Focus on tasks that require emotional intelligence.",
       health:"Consider meditation or yoga for mental clarity.",
       finances:"Review your budget and adjust as necessary.",
       luckyColor:"White", 
       luckyTime:"4 PM - 6 PM", 
       luckyNumber:"2" 
   },
   leo:{ 
      prediction:"Your confidence will attract opportunities today. Embrace them!",
      advice:"Be bold in expressing your ideas; they may lead to success.",
      loveLife:"Flirtation is in the air; enjoy the moment!",
      career:"Leadership roles may present themselves; step up!",
      health:"Engage in physical activities that boost your confidence.",
      finances:"Invest in something that excites you but do thorough research first.",
      luckyColor:"Gold", 
      luckyTime:"5 PM - 7 PM", 
      luckyNumber:"1" 
   },
   virgo:{ 
      prediction :"Today is ideal for organization and planning. Tackle your to-do list.",
      advice :"Prioritize tasks; it will make your day more productive.",
      loveLife :"Communicate openly with your partner about future plans.",
      career :"Your attention to detail will be appreciated by superiors.",
      health :"Focus on nutrition; consider meal prepping for the week ahead.",
      finances :"Track your expenses closely this week and cut unnecessary costs.",  
      luckyColor :"Brown",  
      luckyTime :"10 AM - 12 PM",  
      luckyNumber :"9"  
   },
   libra:{ 
      prediction :"Seek balance in your life today. It’s a good day for making peace.",  
      advice :"Avoid conflicts by being diplomatic in discussions.",  
      loveLife :"A harmonious day for relationships; plan a date night!",  
      career :"Teamwork is essential; collaborate effectively with others.",  
      health :"Balance work and relaxation to avoid burnout.",  
      finances :"Consider consulting a financial advisor for better management strategies.",  
      luckyColor : "Pink",  
      luckyTime : "3 PM - 5 PM",  
      luckyNumber : "4"  
   },
   scorpio:{ 
      prediction :"Your intuition is strong today. Trust your gut feelings.",   
      advice :"Follow your instincts, especially regarding personal matters.",   
      loveLife :"Deep conversations can lead to stronger connections.",   
      career :"Your analytical skills will help solve complex problems.",   
      health :"Pay attention to emotional health; consider journaling.",   
      finances :"Avoid risky investments; play it safe today.",   
      luckyColor : "Black",  
      luckyTime : "12 PM - 2 PM",  
      luckyNumber : "6"  
   },
   sagittarius:{ 
     prediction :"Adventure awaits you today. Be open to new experiences.",   
     advice :"Step outside your comfort zone; try something adventurous.",   
     loveLife :"Exciting encounters are possible; stay open-minded.",   
     career :"Networking could lead to unexpected opportunities.",   
     health :"Engage in outdoor activities for both fun and fitness.",   
     finances :"Explore new income streams or side hustles.",   
     luckyColor : "Purple",  
     luckyTime : "1 PM - 3 PM",  
     luckyNumber : "8"  
   },
   capricorn:{ 
     prediction :"Hard work pays off today. Stay focused on your goals.",   
     advice :"Stay disciplined and prioritize long-term goals.",   
     loveLife :"Stability in relationships brings comfort; appreciate it.",   
     career :"Recognition from superiors is likely; keep pushing forward.",   
     health :"Maintain a balanced routine of work and relaxation.",   
     finances :"Invest wisely; consider long-term benefits over short-term gains.",   
     luckyColor : "Gray",  
     luckyTime : "9 AM - 11 AM",  
     luckyNumber : "10"  
   },
   aquarius:{ 
     prediction :"Innovation is key today. Share your ideas and collaborate.",   
     advice :"Think outside the box; creative solutions are needed.",   
     loveLife :"A unique approach may rekindle romance in a relationship.",   
     career :"Team projects will benefit from your innovative thinking.",   
     health :"Stay active; consider trying a new sport or activity.",   
     finances :"Be cautious with spending on non-essentials today.",   
     luckyColor : "Blue",  
     luckyTime : "3 PM - 5 PM",  
     luckyNumber : "11"  
   },
   pisces:{ 
     prediction :"Embrace your emotional side today. Creativity flows easily.",   
     advice :"Allow yourself to feel deeply, it can inspire creativity.",   
     loveLife :"Expressing feelings can strengthen bonds with loved ones.",   
     career :"Artistic projects may thrive; let creativity guide you.",   
     health :"Focus on mental well-being; consider mindfulness practices.",   
     finances :"Avoid making impulsive purchases; think before spending.",   
     luckyColor : "Sea Green",  
     luckyTime : "4 PM - 6 PM",  
     luckyNumber : "12"  
   }
};

// Fetch predictions based on lagna
function getPredictions() {
   const lagna = document.getElementById('lagna').value;

   if (!lagna) {
       alert('Please select your lagna.');
       return;
   }

   const data = predictionsData[lagna];
   displayPredictions(data);
}

function displayPredictions(data) {
   const predictionsDiv = document.getElementById('predictions');
   predictionsDiv.innerHTML = `
       <div class="prediction-item">
           <div class="subtopic"><strong>Prediction:</strong> ${data.prediction}</div>
           <div class="subtopic"><strong>Advice:</strong> ${data.advice}</div>
           <div class="subtopic"><strong>Love Life:</strong> ${data.loveLife}</div>
           <div class="subtopic"><strong>Career:</strong> ${data.career}</div>
           <div class="subtopic"><strong>Health:</strong> ${data.health}</div>
           <div class="subtopic"><strong>Finances:</strong> ${data.finances}</div>
           <div class="subtopic"><strong>Lucky Color:</strong> ${data.luckyColor}</div>
           <div class="subtopic"><strong>Lucky Time:</strong> ${data.luckyTime}</div>
           <div class="subtopic"><strong>Lucky Number:</strong> ${data.luckyNumber}</div>
       </div>
   `;
}


let ProjectList = [
  'StayAtHome Education',
  'thinkbell labs Education',
 'Luma world  Education',
 'Swadhika Food',
 'Dum Durrust Food',
  'HungerBox Food', 
  'OctneAI Tech',
 'Phantom Tech',
 'MoonPay Tech',
];
const detailbox = document.querySelector('.detailbox');
const resultBox = document.querySelector('.result-box');
const inputBox = document.getElementById('input');
inputBox.onkeyup = function sh() {
  let result = [];
  let input = inputBox.value;
  if (input.length){
    result = ProjectList.filter((keyword) => {
     return keyword.toLowerCase().includes(input.toLowerCase());

    });
   newFunction();
  }
  if(!result.length){
    resultBox.innerHTML = '';
  }
  

  function newFunction() {
    display(result);
  }
}
function display(result){
  const content = result.map((list) => {
    return `<li onclick=selectInput(this)>${list}</li>`; 
  });

  resultBox.innerHTML = `<ul>${content.join('')}</ul>`;
}

function selectInput(list) {
  inputBox.value = list.innerHTML;
  resultBox.innerHTML = "";
}
function search() {
  let input = inputBox.value;
  if (input.length){
    if(input === 'StayAtHome Education'){
      document.getElementById('body').style.display='none';
      detailbox.innerHTML=`<img  class='image_mid'  src='edulog.png'>
      <p>Study at Home Private Ltd. is an e-Learning platform that doesn't require the internet. Users can operate video lectures entirely offline with excellent video & audio quality with low fees. The platform is accessible on all devices such as laptops, desktops, tablets & mobile. The user need not be computer savvy as they provide a straightforward & user-friendly interface.<br>
      qualify for professional courses like CA, CS, CMA, and entrance tests like JEE, NEET, and competitive exams like Banking, SSC, Railways, etc.
      <button class='Explore'>Invest</button>`;
    }
    else if(input === 'thinkbell labs Education'){
      document.getElementById('body').style.display='none';
      detailbox.innerHTML=`<img class='image_mid' src='thinklogo.png'>
      <p>Thinkerbell Labs is a tech-driven organization building innovative, accessible solutions to make Education inclusive. Their focus is to create products that help improve learning outcomes for the visually impaired.</p>
      <p>Their flagship innovation, Annie, is the world's first braille literacy device that helps visually impaired people learn to read, write, and type in braille on their own in any medium of instruction.</p>
      <button class='Explore'>Invest</button>`;
    }
    else if(input === 'Swadhika Food'){
      document.getElementById('body').style.display='none';
      detailbox.innerHTML=`<img  class='image_mid' src='swadhika.png'>
      <p>exporter of fine quality frozen cut fruits and vegetables and frozen ready-to-eat/cook foods, offering customized packing delivery according to International Standards and facilitates modern research and development.<br>startup represents product innovation, quality, freshness, and commitment to excellence and focuses on building a good relationship with customers based on theirs needs.</p>
      <button  class='Explore'>Invest</button>`;
    }
    else if(input === 'Luma world  Education'){
      document.getElementById('body').style.display='none';
      detailbox.innerHTML=`<img  class='image_mid' src='lumalogo.png'>
      <p>  Luma World is a K5 education company that combines the world of education with games and toys to create unique child-centric experiences and promote holistic real-life skill development.The multi-format, hands-on learning makes academics easy to learn, understand, master and apply.</p>
      <button class='Explore'>Invest</button>`;
    }
    else if(input === 'Dum Durrust Food'){
      document.getElementById('body').style.display='none';
      detailbox.innerHTML=`<img  class='image_mid' src='dum-durrust-768x767.png'>
      <p>In dumdurrust, it is an honest effort to create the history with authenticity and bring the best taste to your table. The journey is never ending and research and experiments are always ongoing. Every item in the menu is backed with legacy and curated with passion. Dumdurrust has decided to design the Biryani & Curries using the Dum Process in Clay pots to offer the authenticity, they call it the “Dum Durrust” way.</p>
      <button  class='Explore'>Invest</button>`;
    }
    else if(input === 'MoonPay Tech'){
      document.getElementById('body').style.display='none';
      detailbox.innerHTML=`<img  class='image_mid' src='MP_LOGO_BLACK.jpg'>
      <p>it can be a bit tricky to learn how to convert cryptocurrency investments into real dollars. MoonPay makes the transition easy by helping crypto traders turn their online currency into fiat currency like USD.Funding: Venture, $650.7 Million
      Investors Include: Amir Esmailian, Maria Sharapova, Jaws Ventures</p>
      <button class='Explore'>Invest</button>`;
    }
    else if(input === 'Phantom Tech'){
      document.getElementById('body').style.display='none';
      detailbox.innerHTML=`<img  class='image_mid' src='phantom.png'>
      <p>With crypto being all the rage these days, Phantom is a must-have. This digital wallet allows users to securely swap, keep, and maintain NFTs and cryptocurrency. Their biometric authentication system ensures that users earnings are made for your eyes only.Funding: Undisclosed, $118 Million
      Investors Include: Andreessen Horowitz, Jump Capital, Robert Leshner</p>
      <button class='Explore'>Invest</button>`;
    }
    else if(input === 'OctneAI Tech'){
      document.getElementById('body').style.display='none';
      detailbox.innerHTML=`<img  class='image_mid' src='octane-ai-logo.svg'>
      <p>Looking to up your marketing game via personalization? Look no further than Octane AI. Their tech allows your business to create personalized quizzes and questionnaires to drive more traffic to your site. These insights will better help you understand your customers and their buying habits.<br>Funding: Venture, $10.8 Million
      Investors Include: Javelin Venture Partners, Bullpen Capital, Boost VC </p>
      <button class='Explore'>Invest</button>`;
    }
    else if(input === 'HungerBox Food'){
      document.getElementById('body').style.display='none';
      detailbox.innerHTML=`<img  class='image_mid' src='dum-durrust-768x767.png'>
      <p>In dumdurrust, it is an honest effort to create the history with authenticity and bring the best taste to your table. The journey is never ending and research and experiments are always ongoing. Every item in the menu is backed with legacy and curated with passion. Dumdurrust has decided to design the Biryani & Curries using the Dum Process in Clay pots to offer the authenticity, they call it the “Dum Durrust” way.</p>
      <button  class='Explore'>Invest</button>`;
      
    }
    
  }
};

function login_alert() {
  alert('Log in to start investing');
}

 function knowus1() {
  document.getElementById('body').style.display='none';
      detailbox.innerHTML=`<img  class='image_mid'  src='edulog.png'>
      <p>Study at Home Private Ltd. is an e-Learning platform that doesn't require the internet. Users can operate video lectures entirely offline with excellent video & audio quality with low fees. The platform is accessible on all devices such as laptops, desktops, tablets & mobile. The user need not be computer savvy as they provide a straightforward & user-friendly interface.<br>
      qualify for professional courses like CA, CS, CMA, and entrance tests like JEE, NEET, and competitive exams like Banking, SSC, Railways, etc.
      <button class='Explore'>Invest</button>`;
 }
 function knowus2() {
  document.getElementById('body').style.display='none';
  detailbox.innerHTML=`<img class='image_mid' src='thinklogo.png'>
  <p>Thinkerbell Labs is a tech-driven organization building innovative, accessible solutions to make Education inclusive. Their focus is to create products that help improve learning outcomes for the visually impaired.</p>
  <p>Their flagship innovation, Annie, is the world's first braille literacy device that helps visually impaired people learn to read, write, and type in braille on their own in any medium of instruction.</p>
  <button class='Explore'>Invest</button>`;
 }
 function knowus3(){
  document.getElementById('body').style.display='none';
  detailbox.innerHTML=`<img  class='image_mid' src='lumalogo.png'>
  <p>  Luma World is a K5 education company that combines the world of education with games and toys to create unique child-centric experiences and promote holistic real-life skill development.The multi-format, hands-on learning makes academics easy to learn, understand, master and apply.</p>
  <button class='Explore'>Invest</button>`;
 }
function knowus4(){
  document.getElementById('body').style.display='none';
  detailbox.innerHTML=`<img  class='image_mid' src='swadhika.png'>
  <p>exporter of fine quality frozen cut fruits and vegetables and frozen ready-to-eat/cook foods, offering customized packing delivery according to International Standards and facilitates modern research and development.<br>startup represents product innovation, quality, freshness, and commitment to excellence and focuses on building a good relationship with customers based on theirs needs.</p>
  <button  class='Explore'>Invest</button>`;

}
function knowus5(){
  document.getElementById('body').style.display='none';
      detailbox.innerHTML=`<img  class='image_mid' src='dum-durrust-768x767.png'>
      <p>In dumdurrust, it is an honest effort to create the history with authenticity and bring the best taste to your table. The journey is never ending and research and experiments are always ongoing. Every item in the menu is backed with legacy and curated with passion. Dumdurrust has decided to design the Biryani & Curries using the Dum Process in Clay pots to offer the authenticity, they call it the “Dum Durrust” way.</p>
      <button  class='Explore'>Invest</button>`;
  
}
function knowus6(){
  document.getElementById('body').style.display='none';
  detailbox.innerHTML=`<img  class='image_mid' src='dum-durrust-768x767.png'>
  <p>In dumdurrust, it is an honest effort to create the history with authenticity and bring the best taste to your table. The journey is never ending and research and experiments are always ongoing. Every item in the menu is backed with legacy and curated with passion. Dumdurrust has decided to design the Biryani & Curries using the Dum Process in Clay pots to offer the authenticity, they call it the “Dum Durrust” way.</p>
  <button  class='Explore'>Invest</button>`;
  
}
function knowus7(){
  document.getElementById('body').style.display='none';
  detailbox.innerHTML=`<img  class='image_mid' src='octane-ai-logo.svg'>
  <p>Looking to up your marketing game via personalization? Look no further than Octane AI. Their tech allows your business to create personalized quizzes and questionnaires to drive more traffic to your site. These insights will better help you understand your customers and their buying habits.<br>Funding: Venture, $10.8 Million
  Investors Include: Javelin Venture Partners, Bullpen Capital, Boost VC </p>
  <button class='Explore'>Invest</button>`;
  
}
function knowus8(){
  document.getElementById('body').style.display='none';
  detailbox.innerHTML=`<img  class='image_mid' src='phantom.png'>
  <p>With crypto being all the rage these days, Phantom is a must-have. This digital wallet allows users to securely swap, keep, and maintain NFTs and cryptocurrency. Their biometric authentication system ensures that users earnings are made for your eyes only.Funding: Undisclosed, $118 Million
  Investors Include: Andreessen Horowitz, Jump Capital, Robert Leshner</p>
  <button class='Explore'>Invest</button>`;
  
}
function knowus9(){
  document.getElementById('body').style.display='none';
      detailbox.innerHTML=`<img  class='image_mid' src='MP_LOGO_BLACK.jpg'>
      <p>it can be a bit tricky to learn how to convert cryptocurrency investments into real dollars. MoonPay makes the transition easy by helping crypto traders turn their online currency into fiat currency like USD.Funding: Venture, $650.7 Million
      Investors Include: Amir Esmailian, Maria Sharapova, Jaws Ventures</p>
      <button class='Explore'>Invest</button>`;
  
}

function reload() {
  location.reload();
}

function contactus(){
  document.getElementById('body').style.display='none';
      detailbox.innerHTML=`<p style="
      font-size: 28px;
      font-family: 'Merriweather';
      font-style: italic;">To know more and if you have any query feel free to contact us , if you have any complain please let us know through E-mail</p>
      phone no. : 7089343134 / 253422<br>
      E-mail : Fitcoin04@gmail.com or 23je0040@iitism.ac.in
      :-) `

}


function explore(){
  document.getElementById('body').style.display='none';
  detailbox.innerHTML = ` <div class="accordian">
  <div class="question">
    <h3>Know about our Founders...</h3>
    </div>
    <div class='answer'>
    Blockchain facilitates the verification and traceability of multistep transactions that require verification and traceability. <br> It can ensure secure transactions, lower compliance expenses, and accelerate data transfer processing.
  </div>
</div>
<div class="accordian">
  <div class="question">
    <h3>Why we are the best!</h3>
    </div>
    <div class='answer'>
   Bitcoin is a decentralized digital currency that operates without a financial system or government authorities. <br>It utilizes peer-to-peer transfers on a digital network that records all cryptocurrency transactions.
   </div>
</div>
<div class="accordian">
  <div class="question">
    <h3>does Blockchain technology have a good future??</h3>
    </div>
    <div class='answer'>
    Crypto projects can raise funds by offering token sales and ICOs, conducting STOs for tokens pegged to some physical securities <br>and assets, getting public support on crowdfunding platforms, and issuing limited-edition NFTs.
    </div>
</div>
<script>const accordian = document.querySelectorAll(".accordian");
accordian.forEach(accordian => {
  const answer = accordian.querySelector('.answer');
  accordian.addEventListener("click",() =>{
    answer.classList.toggle('active');
  });
})</script>`
};

const accordian = document.querySelectorAll(".accordian");
accordian.forEach(accordian => {
  const answer = accordian.querySelector('.answer');
  accordian.addEventListener("click",() =>{
    answer.classList.toggle('active');
  });
})

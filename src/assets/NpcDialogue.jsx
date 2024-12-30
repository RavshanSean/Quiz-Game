import React, { useState, useEffect, useRef } from 'react';

const NpcDialogue = () => {
  const [message, setMessage] = useState('');
  const npcMessages = [
    "Hey, how's your day going? Mine was boring...",
    "Ugh, seriously? Another day, another drama. 🙄",
    "Mom was like, 'Clean your room!' And I was like, 'I *live* here, not a museum.' 😑",
    "OMG, why does math homework always feel like a revenge plot? 🧮",
    "Can’t wait for the weekend… so I can finally do *nothing*. 🙌",
    "Why is everyone obsessed with pineapple on pizza? Ew, like, no. 🍍🍕",
    "I swear my phone battery dies faster than my motivation. 📱🔋",
    "Did I just hear Dad say 'Wi-Fi off until chores are done'? Tragic. 💀",
    "If one more person asks me about college, I might fake my own disappearance. 🎓👀",
    "Why do teachers think we don’t have lives? Hello, *TikTok scrolling* is a priority! 🙃",
    "Why is my crush *always* online but never replies? Suspicious. 😒",
    "Sometimes I think my dog understands me better than my friends. 🐶✨",
    "If procrastination were a sport, I'd be a gold medalist. 🏆",
    "Why does Mom always call me when I’m literally mid-game? Like, no respect. 🎮🙄",
    "Do you think aliens watch us and cringe? 'Cause same. 👽👋",
    "Oh great, another 'family meeting'—aka lecture marathon. 😴",
    "I love how the only thing in my fridge is disappointment. 🥶🍽️",
    "Why do teachers *always* pick me to answer when I’m clearly zoning out? 🙄",
    "Just realized I spent two hours stalking someone’s Instagram I don’t even know. 😂📱",
    "Ugh, tomorrow's school... I'm already so lazy.",
    "Oh no, Mom just told me to wash the dishes. I forgot again...",
    "I think I forgot my homework again. Great...",
    "I hope we don't have another quiz tomorrow. I'm not ready!",
    "I can't wait for the weekend. Need a break from everything!",
  ];

  const messageIndexRef = useRef(0);
  const intervalRef = useRef(null); 

  useEffect(() => {
    
    const firstMessageTimeout = setTimeout(() => {
      setMessage(npcMessages[messageIndexRef.current]);

     
      intervalRef.current = setInterval(() => {
        messageIndexRef.current = (messageIndexRef.current + 1) % npcMessages.length; 
        setMessage(npcMessages[messageIndexRef.current]);
      }, 9000); 
    }, 500);

   
    return () => {
      clearTimeout(firstMessageTimeout); 
      if (intervalRef.current) {
        clearInterval(intervalRef.current); 
      }
    };
  }, [npcMessages]);

  return (
    <div className="npc-dialogue-container">
      <div className="npc-dialogue-box">
        <p className="npc-message">{message}</p>
      </div>
    </div>
  );
};

export default NpcDialogue;

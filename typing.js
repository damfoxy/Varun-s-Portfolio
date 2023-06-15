const text = "As a seasoned Data Analyst with 2 years of real-world experience, I've honed a skill set that includes mastering the art of Power BI, Snowflake, Python, MSSQL, MySQL, and Superset. With these bad boys in my arsenal, I've been slaying data challenges left and right, empowering businesses to make mind-blowing decisions.But here's the real magic: I don't just throw data at you; I translate it into actionable insights that fuel your business's success. Together, we'll unleash the power of data, revolutionize the way you make decisions, and create stunning visualizations that will empower better decision-making.So, if you're ready to unlock the secrets hidden within your data, look no further. I'm your go-to guy, ready to rock and roll with data analysis, ETL, and database wizardry. Let's make your business shine brighter than a supernova!!";

const typingTextElement = document.getElementById("typing-text");
const typingCursorElement = document.getElementById("typing-cursor");

let index = 0;

function typeText() {
  if (index < text.length) {
    typingTextElement.textContent += text.charAt(index);
    index++;
    setTimeout(typeText, 50);
  }
}

setTimeout(typeText, 1000); // Delay the typing effect to start after 1 second

function blinkCursor() {
  typingCursorElement.classList.toggle("visible");
  setTimeout(blinkCursor, 500);
}

blinkCursor();

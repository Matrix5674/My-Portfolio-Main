import Image from "next/image";
import Card from "../../Card";
import Theme from "../../Theme";
import {motion} from "framer-motion"

export default function Awards() {
  return (
    <main data-theme={Theme} style={{display: "flex", flexWrap: "wrap", marginTop: "100px"}}>
      <div className= "ml-[200px]">
      <p className="text-6xl w-56 h-24 hover:text-gray-400" style={{marginBottom: "50px", textDecoration: "underline",textUnderlineOffset:"15px"}}> Awards</p>

      <div style={{ display: "flex", flexDirection: "row"}}>
          <Card title="Portfolio Webpage" description="Developed a well-designed and fully functioning portfolio webpage highlighting my goals, interests, and skills." btnTxt="About RFA" skills={["Python", "AI", "Slack"]} skillqnt={3} link=''></Card>
          <Card title="CS50 Course Projects" description="Created over 30 projects for several of CS50's courses." btnTxt="Github" skills={["Python", "AI", "Slack"]} link='' skillqnt={3}></Card>
          <Card title="Slack Bot AI for RFA" description="Created a Slack bot with Slack's API for Robotics for All." btnTxt="Github" skills={["Python", "AI", "Slack"]} skillqnt={3} link=''></Card>
      </div>
      </div>
    </main>
  )
}
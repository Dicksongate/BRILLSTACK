import React from 'react'
import './Editingpage.css'
import video from '../Assets/images/videoplayback.mp4'

function Editingpage() {
  return (
    <div className='editing-container'>
      <div className="about-editing">
        <h1>About Video Editing</h1>
        <p>Video editing is the art of transforming raw video footage into a polished, professional product. With the right editing software, you can cut and rearrange clips, add transitions, special effects, text overlays, and enhance audio quality to create engaging videos. Whether you're a content creator, marketer, or business owner looking to showcase your products or services, video editing allows you to captivate your audience with visually stunning and impactful content. It's a crucial tool for crafting compelling stories and delivering messages that resonate with your target market. The end result is a high-quality video that stands out in today's competitive digital landscape and helps drive engagement and conversions for your brand</p>
        
      </div>
      <div className="role">
        <h1>What Brillstack does Regards to Video Editing</h1>
        <ol>
          <p>
          Brillstack Technologies assembles and edits raw footage into a finished video product. Their work includes:
          </p>
          <l1> Reviewing and selecting the best shots from raw footage</l1>
          <l1> Trimming and rearranging clips to create a cohesive story or narrative</l1>
          <l1>Adding transitions, effects, and graphics to enhance the visual appeal of the video</l1>
          <l1>Adjusting color, brightness, and contrast to ensure consistent quality throughout the video</l1>
          <l1>Incorporating music, sound effects, and voice-overs to enhance the audio experience</l1>
          <l1>Collaborating with directors, producers, and other team members to achieve the desired vision for the final product</l1>
          <l1>Overall, Brillstack Technologies brings together all elements of a video production to create an engaging and professional end product.</l1>          
          </ol>
          <div className="xample-video">
            <h1>Video Example</h1>
            <video src={video} style={{width:'350px',height:'250px'}} controls className='video'></video>
          </div>   



 </div>
     
    </div>
  )
}

export default Editingpage

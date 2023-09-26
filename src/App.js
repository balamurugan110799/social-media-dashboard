import logo from './logo.svg';
import './App.css';
import facebook from "./Components/images/icon-facebook.svg"
import youtube from "./Components/images/icon-youtube.svg"
import twitter from "./Components/images/icon-twitter.svg"
import instagram from "./Components/images/icon-instagram.svg"
import icon_down from "./Components/images/icon-down.svg"
import icon_up from "./Components/images/icon-up.svg"
import { useState } from 'react';
import "./Components/CSS/responsive.css"
import "./Components/CSS/style.css"





function App() {
  const [dashboard, setDashboard] = useState([
    {
      id: 0,
      year: 1987,
      social_media: facebook,
      social_media_id: "@nathanf",
      today_css: "text-lime-green mx-2 text-base font-bold",
      day_css: "text-lime-green ml-2 text-base font-bold",
      follow: "FOLLOWERS",
      growth: icon_up,
      day: 12,
      border_css: "bg-very-pale-blue border-t-4 border-facebook cursor-pointer rounded-[6px] hover:bg-light-grayish-blue py-10"
    },
    {
      id: 1,
      year: 1044,
      social_media: twitter,
      social_media_id: "@nathanf",
      today_css: "text-lime-green mx-2 text-base font-bold",
      day_css: "text-lime-green ml-2 text-base font-bold",
      follow: "FOLLOWERS",
      growth: icon_up,
      day: 99,
      border_css: "bg-very-pale-blue border-t-4 border-twitter cursor-pointer rounded-[6px] hover:bg-light-grayish-blue py-10"
    },
    {
      id: 2,
      year: "11K",
      social_media: instagram,
      social_media_id: "@realnathanf",
      today_css: "text-lime-green mx-2 text-base font-bold",
      day_css: "text-lime-green ml-2 text-base font-bold",
      follow: "FOLLOWERS",
      growth: icon_up,
      day: 1099,
      border_css: "bg-very-pale-blue border-t-4 border-[#DD2A7B] cursor-pointer rounded-[6px] hover:bg-light-grayish-blue py-10"
    }, {
      id: 3,
      year: 8239,
      social_media: youtube,
      social_media_id: "Nathan f",
      today_css: "text-bright-red mx-2 text-base font-bold",
      day_css: "text-bright-red ml-2 text-base font-bold",
      follow: "SUBSCRIBERS",
      growth: icon_down,
      day: 144,
      border_css: "bg-very-pale-blue border-t-4 border-youTube cursor-pointer rounded-[6px] hover:bg-light-grayish-blue py-10"
    }
  ])

  const [overView,setOverView] =useState([
    {
      id:0,
      title:"facebook",
      social_media:facebook,
      count:87,
      page:"Page Views",
      growth: icon_up,
      growth_css:"text-lime-green text-base",
      growth_count:"3%",
    },
    {
      id:1,
      title:"facebook",
      social_media:facebook,
      count:52,
      page:"Likes",
      growth: icon_down,
      growth_css:"text-bright-red text-base",
      growth_count:"2%"
    },
    {
      id:2,
      title:"instagram",
      social_media:instagram,
      count:5462,
      page:"Likes",
      growth: icon_up,
      growth_css:"text-lime-green text-base",
      growth_count:"2257%"
    },
    {
      id:3,
      title:"facebook",
      social_media:instagram,
      count:"52K",
      page:"Profile Views",
      growth: icon_up,
      growth_css:"text-lime-green text-base",
      growth_count:"1375%"
    },
    {
      id:4,
      title:"twitter",
      social_media:twitter,
      count:117,
      page:"Retweets",
      growth: icon_up,
      growth_css:"text-lime-green text-base",
      growth_count:"303%",
    },
    {
      id:5,
      title:"twitter",
      social_media:twitter,
      count:507,
      page:"Likes",
      growth: icon_up,
      growth_css:"text-lime-green text-base",
      growth_count:"553%"
    },
    {
      id:6,
      title:"youtube",
      social_media:youtube,
      count:107,
      page:"Likes",
      growth: icon_down,
      growth_css:"text-bright-red text-base",
      growth_count:"19%"
    },
    {
      id:3,
      title:"youtube",
      social_media:youtube,
      count:1407,
      page:"Total Views",
      growth: icon_down,
      growth_css:"text-bright-red text-base",
      growth_count:"12%"
    },
  ])
  return (
    <div className="App">
      <div className=' container '>
        {/* <div className=' flex'>
          <div className=' h-[100px] w-[100px] mx-4 bg-lime-green '>

          </div>
          <div className=' h-[100px] w-[100px]  mx-4 bg-bright-red '>

          </div>
          <div className=' h-[100px] w-[100px] mx-4 bg-very-dark-blue-top '>

          </div>
          <div className=' h-[100px] w-[100px] mx-4 bg-very-dark-blue-bg '>

          </div>
          <div className=' h-[100px] w-[100px] mx-4 bg-dark-desaturated-blue '>

          </div>
          <div className=' h-[100px] w-[100px] mx-4 bg-very-pale-blue '>

          </div>

          <div className=' h-[100px] w-[100px] mx-4 bg-light-grayish-blue '>

          </div>

          <div className=' h-[100px] w-[100px] mx-4 bg-dark-grayish-blue '>

          </div>

          <div className=' h-[100px] w-[100px] mx-4 bg-instagram '>

          </div>
        </div> */}
        <div className=' grid grid-cols-2'>
          <div className=' block  py-8'>
            <div>
              <h2 className=' text-left text-[30px] text-very-dark-blue-bg font-bold'>
                Socail Media Dashboard
              </h2>
            </div>
            <div>
              <p className='text-left font-semibold text-very-dark-blue-bg'>Total Followers : 23,004</p>
            </div>
          </div>
          <div>
          </div>
        </div>

        <div className=' grid grid-cols-4 gap-10'>
          {dashboard?.map((v, i) => {
            return (
              <div className={`${v?.border_css}`}>
                <div className=' flex justify-center'>
                  <img src={v?.social_media} alt="facebook" className='h-[16px] w-[16px]' />
                  <p className='leading-[14px] text-dark-grayish-blue mx-2 font-sm font-semibold'>{v?.social_media_id}</p>
                </div>
                <p className=' text-[54px] pt-6 font-bold  leading-[56px] text-very-dark-blue-bg'>{v?.year}</p>
                <p className=' font-thin tracking-widest text-dark-grayish-blue'>{v?.follow}</p>
                <div className=' flex justify-center pt-4'>
                  <div className='my-2 '>
                    <img src={v?.growth} alt="down-arrow" />
                  </div>
                  <p className={` ${v?.day_css}`}>{v?.day}</p>
                  <p className={` ${v?.today_css}`}>Today</p>
                </div>
              </div>
            )
          })}

        </div>

          <div className=' pb-16'>

    
        <div className=' grid grid-cols-2'>
          <div className=' block  py-8'>
            <div>
              <h2 className=' text-left text-[30px] text-dark-grayish-blue font-bold'>
                Overview - Today
              </h2>
            </div>
          </div>
          <div>
          </div>
        </div>

        <div className=' grid grid-cols-4 gap-10 '>

          {overView?.map((v,i)=>{
            return(
              <div className='bg-very-pale-blue cursor-pointer rounded-[6px] hover:bg-light-grayish-blue py-8  '>
              <div className=' grid grid-cols-2 px-10'>
                <div className=' flex text-dark-grayish-blue font-semibold  '>{v?.page}</div>
                <div className=' flex justify-end pt-1'><img src={v?.social_media} className=' h-[20px] w-[20px]' /></div>
              </div>
              <div className=' grid grid-cols-2  px-10 pt-3'>
                <div className=' flex text-very-dark-blue-bg font-bold text-[30px] '>{v?.count}</div>
                <div className=' flex justify-end'>  <div className=' flex pt-3.5'>
                  <div className=' pt-2 mx-1'>
                    <img src={v?.growth} />
                  </div>
                  <div>
                    <p className={`${v?.growth_css}`}>{v?.growth_count}</p></div>
                </div> </div>
  
              </div>
  
            </div>
            )
          })}

         

        </div>
        </div>
      </div>
    </div>
  );
}

export default App;

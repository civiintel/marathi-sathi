import ProfileCard from "./ProfileCard"
import axios from 'axios'
import { useEffect, useState  } from "react"

const Profiles = () => {
  
const [profileData, setProfileData] = useState([])

useEffect(() => {
    axios.get('http://localhost:3001/profile').then( res => setProfileData(res.data))
},[])

    return <ProfileCard profileData={profileData} />
}

export default Profiles
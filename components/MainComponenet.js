// import React from 'react'
// import FindPatient from './FindPatient'
// // import GivePermission from './GivePermission'
// import Patients from './Patients'
// import TimeLine from './TimeLine'

// const MainComp = (props) => {

//     if(props.num == 0){
//         return <TimeLine />
//     }
//     else if(props.num == 1){
//         return <Patients />
//     }
//     else if(props.num == 2){
//         return <FindPatient />
//     }
//     // else if(props.num == 3){
//     //     return <GivePermission />
//     // }
//     return <TimeLine />
// }

// export default MainComp
import React from 'react'
import GivePermissionCard from './GivePermissionCard'
// import FindPatient from './FindPatient'
// import PatientCard from './PatientCard'
// import Patients from './Patients'
// import TimeLine from './TimeLine'

const MainComponent = (props) => {

    if(props.num == 1){
        return <GivePermissionCard />
    }
    // else if(props.num == 1){
    //     return <Patients />
    // }
    // else if(props.num == 2){
    //     return <FindPatient />
    // }
    return <TimeLine />
}

export default MainComponent
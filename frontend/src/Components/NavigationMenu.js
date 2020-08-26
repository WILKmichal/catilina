import React from 'react';
import { Link } from "react-router-dom"
import SchoolIcon from '@material-ui/icons/School';
//import LoginSliderRight from "./LoginSliderRight";
import MenuSliderRight from "./MenuSliderRight";




// function NavigationMenu() {
// const [anchorEl, setAnchorEl] = React.useState(null);

//   const handleClick = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleClose = () => {
//     setAnchorEl(null);
//   }
//   return (

//     <div>
//       <div className="">
//            <span className="text-teal-500"> <Link to="/">
//             {/* pour les icones https://heroicons.dev */}

//             <SchoolIcon style={{ fontSize: '50px' }} ></SchoolIcon></Link></span>
//         </div>
//       <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}><LoginSliderRight />
//        Menu
//       </Button>
//       <Menu
//         id="simple-menu"
//         anchorEl={anchorEl}
//         keepMounted
//         open={Boolean(anchorEl)}
//         onClose={handleClose}
//       >
//         <MenuItem onClick={handleClose}>Profile</MenuItem>
//         <MenuItem onClick={handleClose}>My account</MenuItem>
//         <MenuItem onClick={handleClose}>Logout</MenuItem>
//       </Menu>
//     </div>
//   );
// }

// export default NavigationMenu;


function NavigationMenu() {
  return (

    <nav className="justify-around">
      <div className="display: inline-flex menu w-full md:flex ">
        <div className="">
          <span className="text-teal-500"> <Link to="/">
            {/* pour les icones https://heroicons.dev */}

            <SchoolIcon style={{ fontSize: '50px' }} ></SchoolIcon></Link></span>
        </div>
        <div className="	display: inline-flex px-5 mt-3 rounded  mr-2">
        <button class="bg-white text-teal-500  font-mono my-1 px-3 border-2 border-teal-500 rounded ">
  <MenuSliderRight />
</button>
          
          <div>

            {/* <div className="block sticky justify-center py-2"><Link to="/Login" >Login</Link></div>
              <div className="block sticky justify-center py-2"> <Link to="/Register" className="hover:text-white4 py-2 rounded hover:bg-blue-700 mr-2">Register</Link></div> */}
          </div>
        </div>

      </div>
    </nav>
  );
}

export default NavigationMenu;



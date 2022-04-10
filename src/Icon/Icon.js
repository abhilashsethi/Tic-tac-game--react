import { FaPen, FaTimes, FaRegCircle } from 
"react-icons/fa";

const Icons = ({choice}) => {
    switch (choice) {
          case "cross":
                return <FaTimes className="icon" />;
                
          case "circle":
                return <FaRegCircle className="icon" />;
                
      default:
        return <FaPen className="icon" />;
    }
  
}

export default Icons 
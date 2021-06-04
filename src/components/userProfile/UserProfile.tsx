import "./userProfile.css";
import ProfilePic from "../../images/userprofile5.jpg"

const UserProfile = () => {

    const toggleInfo = (e:any) => {
    e.target.parentNode.classList.toggle("open");
  };

  return (
      <div className="main__userprofile">
        <div className="profile__card user__profile__image">
          <div className="profile__image">
            <img src={ProfilePic} />
          </div>
          <h4>Anyone</h4>
          <p>Sofware Engineer, Mindtree</p>
        </div>
        <div className="profile__card">
          <div className="card__header" onClick={toggleInfo}>
            <h4>Information</h4>
            <i className="fa fa-angle-down"></i>
          </div>
          <div className="card__content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            ultrices urna a imperdiet egestas. Donec in magna quis ligula
          </div>
        </div>
      </div>
    );
}

export default UserProfile;
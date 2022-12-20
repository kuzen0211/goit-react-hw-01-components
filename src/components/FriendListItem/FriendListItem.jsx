import style from '../FriendListItem/FriendListItem.module.css';

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <>
      <span
        className={style.status}
        style={{
          backgroundColor: isOnline && 'green',
        }}
      >
        {isOnline}
      </span>
      <img className={style.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={style.name}>{name}</p>
    </>
  );
};

export default FriendListItem;

import React from 'react'
import Avatar from './Avatar';

const styles = {
    wrapper: {
      margin: 8,
      padding: 8,
      display: 'flex',
      flextDirection: 'row',
      border: '1px solid grey',
      borderRadius: 16,
    },
    imageContainer: {},
    image: {
      width: 50,
      height: 50,
      borderRadius: 25,
    },
    contentContainer: {
      marginLeft: 8,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    },
    nameText: {
      color: 'black',
      fontSize: 16,
      fontWeight: 'bold',
    },
    commentText: {
      color: 'black',
      fontSize: 16,
    },
  };

function UserInfo(props) {
    
    return (<div className="user-info" style={styles.imageContainer}>
    {/* Avatar 컴포넌트 시작 */}
    <Avatar info={props.user}/>
    {/* Avatar 컴포넌트 끝 */}

    <div style={styles.contentContainer}>
        <div className="user-info-name" style={styles.nameText}>
          {props.user.name}
        </div>
      </div>
  </div>);
}


export default UserInfo;
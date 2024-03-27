import React from 'react';
import Notification from './Notification';

const reservedNotifications = [
  {
    id: 1,
    message: '안녕하세요, 오늘 일정을 알려드립니다.',
  },
  {
    id: 2,
    message: '점심 식사 시간입니다.',
  },
  {
    id: 3,
    message: '이제 곧 미팅이 시작됩니다.',
  },
];

var timer;

// React 컴포넌트의 constructor에서는 props를 사용할 수 있어야 하므로,
// super(props)를 통해 해당 props를 상위 클래스의 생성자에 전달하여 초기화
// React 클래스 컴포넌트를 상속받은 하위 클래스에서 constructor를 사용할 때는 항상 super(props)를 호출해야함
class NotificationList extends React.Component {
    // 부모 클래스의 생성자(super)에 props를 전달하는 이유는,
    // React 컴포넌트에서 상속된 클래스의 생성자 내에서 this.props를 사용할 수 있도록 하기 위함
  constructor(props) {
    super(props);

    // 컴포넌트의 상태(state)를 사용하여 동적인 데이터를 관리
    // 상태는 컴포넌트의 생명주기 동안 변할 수 있는 데이터를 나타냄
    this.state = {
      notifications: [],
    };
  }

  // mount 시 호출
  // 마운트된 직후에 호출되는 생명주기 메서드인 componentDidMount를 사용하여, 일정 시간 간격으로 상태를 업데이트하는 역할을 수행
  componentDidMount() {
    // reservedNotifications 배열에 있는 알림을 notifications 배열에 추가하는 역할
    const { notifications } = this.state;
    // 이를 위해 setInterval을 사용하여 1초 간격으로 알림을 추가하고,
    // notifications 배열의 길이가 reservedNotifications 배열의 길이에 도달하면 setInterval을 중지
    timer = setInterval(() => {
      if (notifications.length < reservedNotifications.length) {
        const index = notifications.length;
        // reservedNotifications 배열에 있는 특정 index에 해당하는 알림을 notifications 배열에 추가
        notifications.push(reservedNotifications[index]);
        // notifications 배열이 새로운 알림이 추가된 후에 setState를 통해 상태를 갱신
        this.setState({
          notifications: notifications,
        });
      } else {
        // this.setState를 사용하여 notifications 상태를 빈 배열로 업데이트
        this.setState({
            notifications: []
        });
        // setInterval에 의해 설정된 타이머를 중지하는 역할
        clearInterval(timer);
      }
    }, 1000);
  }

  // 이 메서드는 컴포넌트가 소멸될 때 호출
  // unmount 시 호출
  componentWillUnmount() {
    if (timer) {
      clearInterval(timer);
    }
  }

  // 상위 컴포넌트의 state 내에 있는 notifications 배열을 순회하면서 각각의 notification에 대해 하위 컴포넌트인 Notification을 렌더링
  render() {
    return (
      <div>
        {this.state.notifications.map((notification) => {
          return (
            <Notification
              key={notification.id}
              id={notification.id}
              message={notification.message}
            />
          );
        })}
      </div>
    );
  }
}

export default NotificationList;

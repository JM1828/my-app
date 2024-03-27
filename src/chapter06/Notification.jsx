import React from 'react';

const styles = {
  wraper: {
    margin: 8,
    padding: 8,
    display: 'flex',
    flexDirection: 'row',
    border: '1px solid grey',
    borderRadius: 16,
  },
  messageText: {
    color: 'black',
    fontSize: 16,
  },
};

// "Notification"이라는 이름의 리액트 클래스 컴포넌트를 정의
class Notification extends React.Component {
  // constructor 메서드를 사용하여 초기 상태를 설정
  constructor(props) {
    // 부모 클래스의 생성자를 호출
    super(props);

    this.state = {};
  }

  // 이 메서드는 컴포넌트가 마운트된 직후(화면에 렌더링된 직후)에 호출
  componentDidMount() {
    console.log(`${this.props.id}componentDidMount() called.`);
  }

  // 이 메서드는 컴포넌트가 업데이트된 직후에 호출
  componentDidUpdate() {
    console.log(`${this.props.id}componentDidUpdate() called.`);
  }

  // 이 메서드는 컴포넌트가 소멸될 때 호출
  componentWillUnmount() {
    console.log(`${this.props.id}componentWillUnmount() called.`);
  }

  // render 메서드는 JSX를 반환하여 화면에 표시될 내용을 정의
  render() {
    return (
      <div style={styles.wraper}>
        <span style={styles.messeage}>{this.props.message}</span>
      </div>
    );
  }
}

export default Notification;

import { Component, memo, PureComponent } from "react";

type IUser = {
    name: string
    age: number
}

type IProps = {
    user: IUser
}

// functional component
export const FirstComponent = memo(({ name, age }: IUser) => {
  return (
    <div>
      my name is {name}, my age is {age}
    </div>
  );
});

// functional component
const areEqual = (prev, next) => {
  return prev.name === next.name && prev.age === next.age;
};

export const SecondComponent = memo(({ user: { name, age } }: IProps) => {
  return (
    <div>
      my name is {name}, my age is {age}
    </div>
  );
}, areEqual);

// class component
export class ThirdComponent extends PureComponent<IUser> {
  render() {
    return (
      <div>
        my name is {this.props.name}, my age is {this.props.age}
      </div>
    );
  }
}

// class component
export class FourthComponent extends Component<IProps> {
  shouldComponentUpdate(nextProps) {
    if (nextProps.user !== this.props.user) {
      return false;
    }
    return true;
  }

  render() {
    return (
      <div>
        my name is {this.props.user.name}, my age is {this.props.user.age}
      </div>
    );
  }
}

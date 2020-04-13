# Master React

Nomad Academy course to master all the new features of React 16

## Fragment

    return (
        <span>
            <header></header>
            <div></div>
            <footer></footer>
        </span>
    )

React는 return을 할 때 필요없는 span 또는 div 태그로 감싸주고 return 을 해야한다.

하지만 React 16 문법을 사용해서 그런걸 없앨 수 있다.

Fragment를 import 해주고 밑의 문법을 사용할 수 있다.

    return (
        <Fragment>
            <header></header>
            <div></div>
            <footer></footer>
        </Fragment>
    )

Fragment를 빼도 사용 가능

    return (
        <>
            <header></header>
            <div></div>
            <footer></footer>
        </>
    )

Fragment를 빼면 Fragment를 import 하지 않아도 됨.

## strings

    return "hello";

string도 return 가능하다.

그런데 string은 많이 사용 안함

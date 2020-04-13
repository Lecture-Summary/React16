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

## portals

portals는 react root 밖에 react를 넣을 수 있게 해준다.

react root: index.html 의 <div id="root" > 부분

portal은 react-dom 안에 있다

    import { createPortal } from "react-dom";

    class Portals extends Component {
        render() {
            return createPortal(<Message />, document.getElementById("touchme"));
        }
    }

이런식으로 react에서 react 밖을 터치가 가능하다.

## Error Boundaries

    class App extends Component {
        state = {
            hasError: false,
        };

        componentDidCatch = (error, info) => {
            console.log(`catched ${error} the info i have is ${JSON.stringify(info)}`);
            this.setState({
            hasError: true,
            });
        };

        render() {
            const { hasError } = this.state;
            return (
            <Fragment>
                <ReturnTypes />
                <Portals />
                {hasError ? <ErrorFallback /> : <ErrorMaker />}
            </Fragment>
            );
        }
    }

componentDidCatch로 에러를 찾을 수 있고 이를 이용하여 에러가 발생했으면 그 컴포넌트만 나오지 않게하고 다른 컴포넌트들은 정삭적으로 작동되게 해, 앱이 더 프로페셔널하게 보임.

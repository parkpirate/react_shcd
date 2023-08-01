import logo from './logo.svg';
import './App.css';

function Header(props) {
	console.log('props', props);
	return <header>
			<h1><a href="/">WEB</a></h1>
		</header>
}

function Nav() {
	return <nav>
		<ol>
			<li><a href="/read/1">Html</a></li>
			<li><a href="/read/2">Css</a></li>
			<li><a href="/read/3">Java Script</a></li>
		</ol>
	</nav>
}

function Article() {
	return <article>
		<h2>Welcome</h2>
		Hello, WEB
	</article>
}

function App() {
  return (
    <div>
      {/* home으로 이동하는 header 영역 */}
      <Header title="REACT"></Header>

			{/* 구체적인 글을 보는 페이지로 이동하는 영역 */}
      <Nav></Nav>

			{/* 본문 영역 */}
			<Article></Article>
    </div>
  );
}

export default App;

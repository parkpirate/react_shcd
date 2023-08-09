import logo from './logo.svg';
import './App.css';

function Header(props) {
	console.log('props', props, props.title);
	return <header>
			<h1><a href="/">{props.title}</a></h1>
		</header>
}

function Nav(props) {
	const lis = [
	]

	for(let i=0; i<props.topics.length; i++) {
		let t = props.topics[i];
		lis.push(<li key={t.id}><a href={'/read/'+t.id}>{t.title}</a></li>)
	}

	return <nav>
		<ol>
			{lis}
		</ol>
	</nav>
}

function Article(props) {
	return <article>
		<h2>{props.title}</h2>
		{props.body}
	</article>
}

function App() {

	const topics = [
		{id:1, title:'Html', body:'html is ...'},
		{id:2, title:'Css', body:'css is ...'},
		{id:3, title:'JavaScript', body:'javascript is ...'}
	]

  	return (
    <div>
    	{/* home으로 이동하는 header 영역 */}
    	<Header title="WEB"></Header>

		{/* 구체적인 글을 보는 페이지로 이동하는 영역 */}
    	<Nav topics={topics}></Nav>

		{/* 본문 영역 */}
		<Article title="Welcome" body="Hello, WEB"></Article>
    </div>
  );
}

export default App;

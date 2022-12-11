import { ChallengeComponent } from './ChallengeComponent'

export const App = () => {
  return (
    <>
      <header>
        <h1>Welcome To The Every.io Code Challenge.</h1>
        <div>
          <a
            target="_blank"
            href="https://www.figma.com/proto/kd49ArXbBt0vi1kBSLkmC1/Code-Challenge?node-id=1%3A2&scaling=min-zoom&page-id=0%3A1"
            rel="noreferrer"
          >
            Checkout the Prototype
          </a>
        </div>
      </header>
      <main>
        <ChallengeComponent />
      </main>
    </>
  )
}

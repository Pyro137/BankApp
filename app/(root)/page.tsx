import TotalBalanceBox from '@/components/TotalBalanceBox'
import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar'

const Home = () => {
  const loggedIn={firstName:"Metin", lastName:"isikcan",email:"isikcan@gmail.com"}
  return (
    <section className='home'>
      <div className='home-content'>
        <header className='home-header'>
          <HeaderBox
          type="greeting"
          title="Welcome"
          user={loggedIn?.firstName || "Guest"}
          subtext="Access and manage your account"/>

          <TotalBalanceBox
          accounts={[]}
          totalBanks={1}
          totalCurrentBalance={125866.35}/>
        </header>
        Recent transictions
      </div>
      <RightSidebar
        user={loggedIn}
        transactions={[]}
        banks={[{currentBalance:1250}]}
      />
    </section>
  )
}

export default Home

import NoScrollLink from '../components/NoScrollLink'

export default function Home() {
  return (
    <main className="max-w-site m-auto flex flex-col items-center w-full flex-1 px-4 text-left">
      <h2 className="text-4xl mt-10 mb-5 w-full text-left md:text-center">Next.js x Framer Motion</h2>
      <section className="md:w-1/2 text-left mb-10">
        <p className="my-2">This app is a playground for using Framer Motion with Next.js. It's mostly made up with plain looking content and lorem ipsum.</p>
        <h3 className="my-2 mt-5 text-xl">So far I've added:</h3>
        <ul className="list-disc ml-8">
          <li>Page transitions</li>
          <li>Animated the active indicator on the navigation bar</li>
        </ul>
      </section>
      <section className="md:w-2/3">
        <p className="my-4">
          Tristique varius inceptos litora dictum venenatis luctus feugiat tempor class et placerat. Cum libero, eros mattis a netus in proin posuere class cursus. Mattis quis aliquet facilisis. Tempus vitae sociis morbi class, proin potenti lobortis eros. Eu elementum aptent praesent lobortis et dolor netus sodales tincidunt. Fermentum ullamcorper litora faucibus condimentum platea. Commodo fames lobortis senectus arcu faucibus? Fames ipsum accumsan primis! Penatibus aptent lorem mollis dolor faucibus suscipit felis sed ad lobortis maecenas. Blandit convallis duis facilisi inceptos dui nisi hendrerit pulvinar penatibus. Mattis eget dis fusce non commodo senectus justo senectus taciti eget. Platea potenti taciti adipiscing.
        </p>
        <p className="my-4">
          Felis per lorem gravida consequat. Mus faucibus purus phasellus in interdum. Sem imperdiet vehicula, inceptos quam. Porttitor hac ante consequat inceptos bibendum luctus praesent. Imperdiet ullamcorper urna nulla pulvinar platea dui mollis porta morbi vulputate aliquam etiam? Class penatibus bibendum mauris vivamus rutrum tempus scelerisque semper blandit! Duis quisque mauris sapien vitae malesuada hendrerit ante arcu faucibus consectetur tellus nostra. Euismod elementum aptent viverra inceptos consectetur ridiculus aliquam duis orci proin, nascetur nam. Massa volutpat mus quam praesent per in dolor. Euismod elit ridiculus tortor iaculis dapibus fermentum augue facilisis!
        </p>
        <p className="my-4">
          Fermentum luctus non ultricies commodo duis inceptos! Auctor purus aliquam dapibus neque cras placerat? Ornare viverra tellus sodales convallis neque nunc iaculis adipiscing praesent etiam blandit! Odio magna morbi ullamcorper porttitor elit dictumst erat porttitor himenaeos volutpat cum. Senectus suscipit, pulvinar vitae. At venenatis bibendum consectetur odio mi torquent tempor nam mattis. Et sem vel nullam himenaeos. Fringilla vivamus quisque scelerisque.
        </p>
        <p className="my-4">
          Mattis leo tortor scelerisque tortor nulla eu vel fames nulla magnis semper. Augue platea risus lacinia proin vivamus habitant platea vivamus sed! Ornare vivamus pulvinar, congue in facilisis suscipit sollicitudin? Feugiat sodales commodo nisi placerat sodales posuere dapibus nisi nascetur neque. Erat mattis eget etiam gravida placerat varius vel rhoncus. Per curae; sed at lobortis vestibulum nostra quisque, mus lobortis nisi. Et magna consectetur netus adipiscing lacus risus ad sagittis. Phasellus faucibus netus a aenean, tempor at! Vivamus vel, class maecenas gravida ligula bibendum. Habitant mollis feugiat nulla massa neque fusce. Ultrices enim.
        </p>
        <p className="my-4">
          Etiam interdum praesent dapibus. Eros dignissim lobortis semper ac urna consectetur ullamcorper ultrices penatibus? Erat turpis luctus, tristique ligula sodales diam volutpat lacus dis ridiculus imperdiet ut. Senectus ullamcorper quisque integer pulvinar auctor urna volutpat platea suspendisse fringilla. Donec rutrum ultricies erat maecenas justo, rhoncus aliquet nunc donec. Pharetra at hac ullamcorper felis sagittis quisque. Nullam cras orci dignissim lacus conubia nullam. Donec inceptos dui maecenas in primis orci aliquam. Porttitor luctus ornare aliquam dapibus sociosqu libero ultrices gravida arcu.
        </p>
      </section>
      <NoScrollLink href='/colours'>
        <a className="px-2 py-1 border block mb-24">Continue to colours</a>
      </NoScrollLink>
    </main>
  )
}

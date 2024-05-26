export default function Index() {
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-2xl font-bold">FAQ:</h1>
      <h2 className="font-semibold text-lg">
        So why not just burn the assets?
      </h2>
      <p>
        Burning assets is in some jurisdictions not considered as a realising
        taxable event and therefore will not give you the accumulated tax losses
        that you want to deduct against your profits.
      </p>
      <h2 className="font-semibold text-lg">
        How is this tool different then for example
        https://nftlossharvestooor.com?
      </h2>
      <p>
        This is actually a fork of the NFT Loss HARVESTOOOR. We added
        functionality around other tokens that are not ERC721, increased
        features around privacy and removed a function that allows you to buy
        back your assets at any time for the same price as this could be seen as
        a fake transaction from the tax office.
      </p>
      <h2 className="font-semibold text-lg">Can I get my assets back?</h2>
      <p>
        No. This is a real transaction in which you are selling your assets to
        the hoarder, the hoarder does not give back anything he collected.
      </p>
      <h2 className="font-semibold text-lg">How are the taxes calculated?</h2>
      <p>
        This depends highly on your personal tax residency and the jurisdiction
        you are in. Also on your personal situation for example if the assets
        are private assets or part of a legal entity eg a business. Here a
        simplified example for Germany. You privately buy tokens in ETH for the
        value of 1000€ (Make sure to tax the ETH correct at this point). After
        finishing the transaction you find out that you used a fake-pool and
        ended up with a token that has the same symbol as the token you wanted
        but is worthless. Now you are stuck with a token that you can not sell
        or use and that you didn’t want. If you manage to sell your tokens
        within a year to someone for example Hoarder for 0,0001 € then you will
        accumulate a loss of 1000€ that you can deduct against other profits
        made in crypto trading in this year and save up to 450€ in taxes.
      </p>
      <h2 className="font-semibold text-lg">
        Should I send all my airdrops and unwanted coins to this contract?
      </h2>
      <p>
        This is not recommended, some tokens have no „send“ functionality or
        have a malicious „send“ functionality, for those you might end up
        causing more problems. Selling your assets to the hoarder is only a good
        idea if you can’t sell them on any other marketplace, if you are within
        a tax deductible time frame and if you have actually paid for the asset
        in the beginning.
      </p>
      <h2 className="font-semibold text-lg">Is this legal?</h2>
      <p>
        This question depends on your jurisdiction. In general it is highly
        recommended to disclose things like using this tool to the tax office.
        The developers don’t take any responsibility for misusing this tool.
      </p>
      <h2 className="font-semibold text-lg">Is this a real transaction?</h2>
      <p>
        Yes, this is a transaction that takes place on the blockchain. Your
        assets are sold to the Hoarder and you can not get them back.
      </p>
      <h2 className="font-semibold text-lg">
        All you do is loose money. How is this funded?
      </h2>
      <p>
        The hoarder is pre-funded by the developing team. We did brainstorm
        different ideas on how to fund the contract in interesting ways, the
        biggest problem was that the contract could end up with assets himself
        and therefore be considered a business which would lead to regulatory
        complexity. If the contract is empty at some point it has done an
        amazing job. Everybody can fund the contract again, keep in mind that
        his might limit your ability to use it, the tax office might consider
        giving someone money to buy something from you is a fake transaction and
        therefore not treated the same way. If the project ends up to be so
        successful that it will need to be refunded this might be something to
        use RetroPGF.
      </p>
      <h2 className="font-semibold text-lg">Disclaimer:</h2>
      <p>
        This tool was built during ETHBerlin04. 24.05.2024 - 26.05.2024 use at
        your own risk. No safety audits have been made. Only use for assets that
        are absolutely worthless, there is no way to get your coins back. Tax
        law varies by country. Please check if deducting losses against profits
        is possible in your jurisdiction. This method might not be legal in your
        country, please consult a tax lawyer to verify if this can be added to
        your taxes. Using this tool should always be disclosed to the tax
        office, in some legislation using a tool like this could be considered
        as an abusive tax structure.
      </p>
    </div>
  );
}

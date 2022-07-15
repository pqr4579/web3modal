const ConnectToKaikas = async () => {
    console.log("KaiKasConnector")
    let provider = null;
    if (typeof window.klaytn !== 'undefined') {
      provider = window.klaytn;
      try {
        await provider.enable();
      } catch (error) {
        throw new Error("User Rejected");
      }
    }else {
        throw new Error("No KaiKas Provider found");
    }
    return provider;
  };
  
  export default ConnectToKaikas;
  
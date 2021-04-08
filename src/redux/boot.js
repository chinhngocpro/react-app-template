export default () => new Promise(() => {
    //Code at here will run before App loaded
    //U might verify token, check auth,...
    // store.dispatch(authActions.checkAuthorization());
    console.log("Checking...");
});
import database from './database';

export const HEADER = () => {
    return (
          <header className="App-header">
            <p>Connected to NUFORC database.
            Total records: {database.length}</p>
          </header>
      );
}

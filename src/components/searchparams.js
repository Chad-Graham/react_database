import styled from 'styled-components';

const BTN = styled.button`
  background-color: #282c34;
  color: white;
  font-size: 10px;
  padding: 5px 10px;
  outline-style: none;
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
  border-radius: 5px;
  margin: 10px 5px;
  cursor: pointer;
`;


export const SEARCHPARAMS = () => {
    return (
          <div className="Search-params">
            <p>Query database by catagory or enter search term below</p>
            <input type="search" id="form1" className="form-control" default='enter here'/>

            <BTN type="button">SEARCH
            </BTN>
            </div>
      );
}
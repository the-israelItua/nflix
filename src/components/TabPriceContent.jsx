import React from "react";
import { FaCheck, FaTimes } from "react-icons/fa";

const TabPriceContent = () => {
  return (
    <div>
      <div className="tab-top-content">
        <span>Choose one plan and watch everything on Netflix</span>
        <button>try it now</button>
      </div>
      <div className="tab-bottom-table">
        <table>
          <thead>
            <th></th>
            <th>Basic</th>
            <th>Standard</th>
            <th>Premiun</th>
          </thead>
          <tbody>
            <tr>
              <td>Monthly Price</td>
              <td>$9.99</td>
              <td>13.99</td>
              <td>16.99</td>
            </tr>
            <tr>
              <td>HD available</td>
              <td>
                <FaTimes />
              </td>
              <td>
                <FaCheck />
              </td>
              <td>
                <FaCheck />
              </td>
            </tr>
            <tr>
              <td>Ultra HD available</td>
              <td>
                <FaTimes />
              </td>
              <td>
                <FaTimes />
              </td>
              <td>
                <FaCheck />
              </td>
            </tr>
            <tr>
              <td>Screens you can watch on at the same time</td>
              <td>1</td>
              <td>2</td>
              <td>4</td>
            </tr>
            <tr>
              <td>Watch on your laptop, TV, phone and table</td>
              <td>
                <FaCheck />
              </td>
              <td>
                <FaCheck />
              </td>
              <td>
                <FaCheck />
              </td>
            </tr>
            <tr>
              <td>Unlimited movies and TV shows</td>
              <td>
                <FaCheck />
              </td>
              <td>
                <FaCheck />
              </td>
              <td>
                <FaCheck />
              </td>
            </tr>
            <tr>
              <td>Cancel anytime</td>
              <td>
                <FaCheck />
              </td>
              <td>
                <FaCheck />
              </td>
              <td>
                <FaCheck />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TabPriceContent;

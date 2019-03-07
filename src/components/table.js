import React, {Component} from "react";

export const Table = ({}) => {
  return (
    <>
      <table className="table table-bordered">
        <thead>
        <tr>
          <th scope="col">id</th>
          <th scope="col">content</th>
          <th scope="col">action </th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>
            <button className="btn btn-danger">Delete</button>
            <button className="btn btn-info">Edit</button>
          </td>
        </tr>
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>
            <button className="btn btn-danger">Delete</button>
            <button className="btn btn-info">Edit</button>
          </td>
        </tr>
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>
            <button className="btn btn-danger">Delete</button>
            <button className="btn btn-info">Edit</button>
          </td>
        </tr>
        <tr>
          <label htmlFor="exampleFormControlTextarea1">Content</label>
          <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
          <button className="btn badge-dark">OK</button>
          <button className="btn badge-light">Cancel</button>
        </tr>
        </tbody>
      </table>

    </>
  );
}

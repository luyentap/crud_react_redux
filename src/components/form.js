import React, {Component} from "react";

export const Form = () => {
  return (
    <form>
      <div className="form-group">
        <label htmlFor="exampleFormControlTextarea1">Content</label>
        <textarea  className="form-control" rows="3"></textarea>
        <small className="form-text text-muted">Enter the content</small>
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  );
}

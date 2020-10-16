import React from "react";

function SearchForm(props) {
  return (
    <form
      onSubmit={props.onSubmit}
      data-testid="form"
      className="d-flex justify-content-center col-md-4 offset-md-4 flex-column text-center"
      autoComplete="off"
    >
      <label>Repository Name</label>
      <input
        className="form-group"
        placeholder="Repository name"
        name="repoName"
        value={props.dataRepo.repoName.trim()}
        onChange={props.onChange}
      ></input>

      <label>Owner</label>
      <input
        className="form-group"
        placeholder="Owner name"
        name="ownerName"
        type="text"
        value={props.dataRepo.ownerName.trim()}
        onChange={props.onChange}
      ></input>

      <button className="btn btn-info" data-testid="button" type="submit">
        View contributors!
      </button>
    </form>
  );
}

export default SearchForm;

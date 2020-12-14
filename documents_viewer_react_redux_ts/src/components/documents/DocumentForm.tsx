import React, { ChangeEvent } from "react";
import "./DocumentForm.css";

interface Props {
  handleSubmit: any;
  handleChange: (
    event: ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => void;
  saving: boolean;
}

const DocumentForm = ({
  handleSubmit,
  handleChange,
  saving = false,
}: Props): JSX.Element => {
  return (
    <form autoComplete="off" onSubmit={handleSubmit}>
      <p>
        If you choose <strong>simple type</strong> of document even though you
        select an image or text, it will only be displayed the title and date.{" "}
        <br />
        For <strong>custom type</strong> will be displayed text too. <br />
        And for the <strong>advanced type</strong> all items will be displayed.
      </p>
      <label htmlFor="title">Title</label>
      <input
        id="title"
        name="title"
        type="text"
        onChange={handleChange}
        maxLength={80}
        required
      />

      <label htmlFor="type">Type</label>
      <select id="type" name="type" onChange={handleChange} required>
        <option value="">Choose a type</option>
        <option value="simple">Simple</option>
        <option value="custom">Custom</option>
        <option value="advanced">Advanced</option>
      </select>

      <label htmlFor="date">Date</label>
      <input
        id="date"
        name="date"
        type="date"
        onChange={handleChange}
        required
      />

      <label htmlFor="text">Text</label>
      <textarea id="text" name="text" onChange={handleChange} />

      <label htmlFor="image">Image</label>
      <input id="image" name="image" type="text" onChange={handleChange} />
      <p>
        The format of the image must be an url ending with a proper image
        extension(p.e: .jpeg, .jpg, gif,...) <br />
        <span>
          (example:
          https://mimusica.es/wp-content/uploads/2019/10/musica-chillout.jpg)
        </span>
      </p>

      <button className="greenButton" type="submit" disabled={saving}>
        {saving ? "Saving..." : "Create course"}
      </button>
    </form>
  );
};

export default DocumentForm;

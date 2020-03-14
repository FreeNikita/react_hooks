import React, { useState, useEffect } from 'react';
import BackendErrorMessage from 'components/backendErrorMessage';

const ArticleForm = ({ onSubmit, errors, initialValues }) => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [description, setDescription] = useState('');
  const [tagList, setTagList] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({
      title,
      body,
      description,
      tagList,
    });
  };

  useEffect(() => {
    if (!initialValues) {
      return;
    }
    setTitle(initialValues.title);
    setBody(initialValues.body);
    setDescription(initialValues.description);
    setTagList(initialValues.tagList.join(' '));
  }, [initialValues]);

  return (
    <div className="editor-page">
      <div className="container-page">
        <div className="row">
          <div className="col-md-10 offset-md-1 col-xs-12">
            {errors && <BackendErrorMessage backendErrorMessage={errors} />}
            <form onSubmit={handleSubmit}>
              <fieldset>
                <fieldset className="form-group">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Article title"
                    value={title}
                    onChange={({ target: { value } }) => setTitle(value)}
                  />
                </fieldset>
                <fieldset className="form-group">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="What is this article about?"
                    value={body}
                    onChange={({ target: { value } }) => setBody(value)}
                  />
                </fieldset>
                <fieldset className="form-group">
                  <textarea
                    className="form-control"
                    rows={8}
                    placeholder="Write your article (in markdown)"
                    value={description}
                    onChange={({ target: { value } }) => setDescription(value)}
                  />
                </fieldset>
                <fieldset className="form-group">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Enter tags"
                    value={tagList}
                    onChange={({ target: { value } }) => setTagList(value)}
                  />
                </fieldset>
                <fieldset className="form-group">
                  <button type="submit" className="btn btn-lg pull-xs-right btn-primary">
                    Publish Article
                  </button>
                </fieldset>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleForm;

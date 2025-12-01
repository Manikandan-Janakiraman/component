const FormHandling = () => {


    
    return (
        <div className="form-container">
            <form className="form-card">
                <h2>Feedback Form</h2>

                {/* Basic Details */}
                <div className="form-group">
                    <label>Name:</label>
                    <input type="text" />
                </div>

                <div className="form-group">
                    <label>Address:</label>
                    <input type="text" />
                </div>

                <div className="form-group">
                    <label>Mobile:</label>
                    <input type="text" />
                </div>

                {/* Radio Sections */}
                <div className="form-group">
                    <label>Syllabus Upgraded:</label>
                    <div className="radio-group">
                        <label><input type="radio" name="syllabusUpgraded" value="yes" /> Yes</label>
                        <label><input type="radio" name="syllabusUpgraded" value="no" /> No</label>
                    </div>
                </div>

                <div className="form-group">
                    <label>Recent Syllabus:</label>
                    <div className="radio-group">
                        <label><input type="radio" name="recentSyllabus" value="yes" /> Yes</label>
                        <label><input type="radio" name="recentSyllabus" value="no" /> No</label>
                    </div>
                </div>

                <div className="form-group">
                    <label>Practical Process:</label>
                    <div className="radio-group">
                        <label><input type="radio" name="practicalProcess" value="yes" /> Yes</label>
                        <label><input type="radio" name="practicalProcess" value="no" /> No</label>
                    </div>
                </div>

                {/* Text Fields */}
                <div className="form-group">
                    <label>Infrastructure:</label>
                    <input type="text" />
                </div>

                <div className="form-group">
                    <label>Overall Review:</label>
                    <input type="text" />
                </div>

                {/* Reviewer Details */}
                <div className="form-group">
                    <label>Reviewer Name:</label>
                    <input type="text" />
                </div>

                <div className="form-group">
                    <label>Reviewer Mobile:</label>
                    <input type="text" />
                </div>

                <div className="form-group">
                    <label>Reviewer Email:</label>
                    <input type="email" />
                </div>

                <button className="submit-btn">Submit</button>
            </form>
        </div>
    );
};

export default FormHandling

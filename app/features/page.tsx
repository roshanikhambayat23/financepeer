import React from 'react';

const HowToComponent = () => {
	return (
		<div className="mx-5 sm:mx-20 p-8 flex-grow">
			<h1 className="text-3xl font-bold mb-6">
				JSONify: Simplifying JSON Handling
			</h1>

			<section>
				<h2 className="text-2xl font-bold mb-4">Major Updates</h2>
				<ul className="list-disc pl-6">
					<li className="mb-2">
						<span className="font-semibold">Data Parsing</span>
						<p className="ml-4">
							Support for mandatory and optional fields.
						</p>
					</li>

					<li className="mb-2">
						<span className="font-semibold">Error Handling</span>
						<p className="ml-4">
							Catching missing fields and parsing errors with
							ease.
						</p>
					</li>

					<li className="mb-2">
						<span className="font-semibold">
							Better Visualization
						</span>
						<p className="ml-4">
							View and copy json data with prettier visualization
						</p>
					</li>

					<li className="mb-2">
						<span className="font-semibold">
							Endpoints Creation.
						</span>
						<p className="ml-4">
							Ready to use API endpoints of the data parsed to use
							as you need.
						</p>
					</li>
				</ul>
			</section>

			<section className="mb-8">
				<h2 className="text-2xl font-bold mb-4">Features</h2>
				<ul className="list-disc pl-6">
					<li className="mb-2">
						<span className="font-semibold">
							JSON Data Management
						</span>
						<p className="ml-4">
							Jsonify allows you to easily manage and manipulate
							JSON data with a simple and intuitive interface.
						</p>
					</li>
					<li className="mb-2">
						<span className="font-semibold">
							Import and Export JSON Files
						</span>
						<p className="ml-4">
							You can seamlessly import and export JSON files,
							making it convenient to work with external data
							sources.
						</p>
					</li>
					<li className="mb-2">
						<span className="font-semibold">
							Prettify JSON Data
						</span>
						<p className="ml-4">
							Jsonify automatically formats JSON data for improved
							readability, making it easier to work with large
							datasets.
						</p>
					</li>
					{/* Add more features as needed */}
				</ul>
			</section>

			<section>
				<h2 className="text-2xl font-bold mb-4">Use Cases</h2>
				<ul className="list-disc pl-6">
					<li className="mb-2">
						<span className="font-semibold">Data Parsing</span>
						<p className="ml-4">
							Jsonify simplifies the process of parsing and
							extracting specific information from JSON objects.
						</p>
					</li>
					<li className="mb-2">
						<span className="font-semibold">API Integration</span>
						<p className="ml-4">
							Integrate external APIs seamlessly by converting
							JSON responses into a format that suits your
							application.
						</p>
					</li>
					<li className="mb-2">
						<span className="font-semibold">
							Data Cleaning and Transformation
						</span>
						<p className="ml-4">
							Use Jsonify to clean and transform messy JSON data
							into a structured format that meets your
							requirements.
						</p>
					</li>
					{/* Add more use cases as needed */}
				</ul>
			</section>
		</div>
	);
};

export default HowToComponent;

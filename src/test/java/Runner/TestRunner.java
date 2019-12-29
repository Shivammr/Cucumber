package Runner;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
		features= "C:\\Users\\Shivamm\\eclipse-workspace\\Cucumber\\src\\test\\java\\Features\\2_Compose.feature"
		, glue= "StepDefinitions", 
		plugin= {"pretty", "html:test-output", "json:json_output/cucumber.json", "junit:junit_xml/cucumber.xml"},
		dryRun = false,
		monochrome = true,
		strict = true	
)

public class TestRunner {

}

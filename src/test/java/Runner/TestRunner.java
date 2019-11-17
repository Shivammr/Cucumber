package Runner;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
		features= "C:\\Users\\Shivamm\\eclipse-workspace\\Cucumber\\src\\test\\java\\Features"
		, glue= "StepDefinitions", 
		plugin= {"pretty", "html:test-output"}
)

public class TestRunner {

}

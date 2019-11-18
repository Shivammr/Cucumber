package StepDefinitions;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class LoginStepDef {

	WebDriver driver;
	public static void init() {

	}

	@Given("^User is on the login page$")
	public void user_on_login_page() {
		System.setProperty("webdriver.chrome.driver", System.getProperty("user.dir") + "\\BrowserDrivers\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		driver.get("http://www.gmail.com/");
	}

	@When("^User enters the username$")
	public void user_enters_username() {
		driver.findElement(By.id("identifierId")).sendKeys("shivammrastogi");
	}

	@And("^User clicks on Next button$")
	public void user_hits_Next_button() {
		driver.findElement(By.id("identifierNext")).click();
	}

	@And("^User enters the password$")
	public void user_enters_password() {
		driver.findElement(By.name("password")).sendKeys("rakshik$");
	}

	@And("^User hits Next button$")
	public void user_selects_Next_button() {
		driver.findElement(By.id("passwordNext")).click();
	}

	@Then("^User gets navigated to Inbox$")
	public void user_navigates_inbox() {
		String Inbox = driver.getTitle();
		System.out.println(Inbox);
	}
}
